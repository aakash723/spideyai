import { EngineBase } from './core.js';
import { store } from './data-store.js';
import { conversationEngine } from './conversation-engine.js';
import { missionEngine } from './mission-engine.js';

const PRIORITY = ['reminder', 'mission_update', 'question', 'prediction', 'insight', 'casual'];

export class DecisionEngine extends EngineBase {
  constructor() {
    super('DecisionEngine');
    // Clear stale suggestions from old template format
    store.set('suggestions.current', null);
    store.set('suggestions.dismissed', []);
  }

  decide(conversationResponse, intent, entities, weatherData) {
    const decisions = [];
    const primary = intent.primary;

    if (primary === 'exam' || primary === 'study') {
      decisions.push({ action: 'create_mission', reason: 'study_topic_detected', priority: 2 });
    }
    if (primary === 'media') {
      decisions.push({ action: 'play_media', reason: 'media_requested', priority: 1 });
      if (entities.times.length > 0) {
        decisions.push({ action: 'create_mission', reason: 'schedule_with_media', priority: 2 });
      }
    }
    if (primary === 'schedule') {
      decisions.push({ action: 'offer_mission', reason: 'schedule_detected', priority: 2 });
    }
    if (weatherData && this._shouldWeatherAlert(weatherData)) {
      decisions.push({ action: 'weather_alert', reason: 'rain_or_storm', priority: 1 });
    }
    if (primary === 'gym' || primary === 'food') {
      decisions.push({ action: 'generate_quests', reason: 'activity_detected', priority: 3 });
    }
    if (primary === 'casual') {
      decisions.push({ action: 'casual_chat', reason: 'casual_conversation', priority: 5 });
    }

    decisions.push({ action: 'update_hud', reason: 'state_changed', priority: 4 });

    decisions.sort((a, b) => a.priority - b.priority);

    const result = {
      response: conversationResponse,
      actions: decisions.map(d => d.action),
      shouldSpeak: !conversationResponse.includes('?') || decisions.length <= 3,
      priority: decisions[0]?.priority || 5,
    };

    store.set('decisions.last', result);
    this.emit('decided', result);
    return result;
  }

  _shouldWeatherAlert(weather) {
    if (!weather?.current?.weathercode) return false;
    const code = weather.current.weathercode;
    return code >= 51 && code <= 67 || code >= 80 && code <= 99;
  }

  generateInsights(weatherData, predictions, habits) {
    const insights = [];
    const now = new Date();
    const hour = now.getHours();

    if (weatherData) {
      const temp = weatherData.current?.temperature_2m;
      const code = weatherData.current?.weathercode;
      if (code != null && code >= 51) {
        insights.push('Rain detected — indoor tasks recommended.');
        insights.push('Don\'t forget your umbrella!');
      } else if (code != null && code >= 71) {
        insights.push('Snow outside — stay warm!');
      } else if (temp != null) {
        if (temp > 30) insights.push('Hot day — stay hydrated.');
        else if (temp < 10) insights.push('Cold outside — layer up.');
        else insights.push(`Nice weather at ${temp}°C.`);
      }
    }

    if (predictions && predictions.length > 0) {
      const top = predictions[0];
      if (top.probability > 70) {
        insights.push(`You'll probably ${top.activity} ${top.timeframe}.`);
      }
    }

    if (hour >= 6 && hour < 12) insights.push('Good morning! Prime focus hours ahead.');
    if (hour >= 12 && hour < 14) insights.push('Lunch time — refuel!');
    if (hour >= 14 && hour < 17) insights.push('Afternoon slump? Try a quick walk.');
    if (hour >= 17 && hour < 21) insights.push('Evening — great time to review your day.');
    if (hour >= 21 || hour < 6) insights.push('Wind down time. Consider relaxing.');

    store.set('insights', insights);
    this.emit('insights-generated', insights);
    return insights;
  }

  async generateProactiveMessage() {
    const lastProactive = store.get('proactive.lastMessage') || 0;
    const lastUserMsg = store.get('proactive.lastUserMessage') || 0;
    const now = Date.now();

    if (now - lastUserMsg < 15000) return null;
    if (now - lastProactive < 25000) return null;
    if (store.get('missions.current')) return null;

    // Fetch a spoken suggestion from the memory backend
    try {
      const res = await fetch('/suggest/speak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: 'default' })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.message) {
          store.set('proactive.lastMessage', now);
          return data.message;
        }
      }
    } catch {}

    // Fallback: generic
    const fallbacks = [
      "Time for a quick mission — what interests you right now?",
      "I think it's a great moment to pick up where you left off.",
      "Your profile says you love learning — want a new challenge?",
    ];
    store.set('proactive.lastMessage', now);
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  async suggestMission() {
    const dismissed = store.get('suggestions.dismissed') || [];
    const list = store.get('suggestions.list') || [];

    if (store.get('missions.current')) return null;

    try {
      const res = await fetch('/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: 'default' })
      });
      if (res.ok) {
        const data = await res.json();
        const suggestions = data.suggestions || [];
        if (suggestions.length > 0) {
          const recentDismissed = dismissed.filter(d => Date.now() - d.time < 86400000);
          const dismissedIds = new Set(recentDismissed.map(d => d.id));
          const existingTitles = new Set(list.map(s => s.title));
          const available = suggestions.filter(
            s => !dismissedIds.has(s.id) && !existingTitles.has(s.title)
          );

          for (const s of available) {
            if (!s.id) s.id = `suggest_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
            s.reason = 'Based on your interests';
            s.time = Date.now();
            list.push(s);
          }

          const capped = list.slice(-20);
          store.set('suggestions.list', capped);
          return capped.length > 0 ? capped[capped.length - 1] : null;
        }
      }
    } catch {}

    return null;
  }

  dismissSuggestion(id) {
    const dismissed = store.get('suggestions.dismissed') || [];
    let list = store.get('suggestions.list') || [];
    const idx = list.findIndex(s => s.id === id);
    if (idx !== -1) {
      dismissed.push({ id, condition: list[idx].condition || 'custom', time: Date.now() });
      list = list.filter(s => s.id !== id);
      store.set('suggestions.dismissed', dismissed);
      store.set('suggestions.list', list);
    }
  }

  acceptSuggestion(id) {
    const list = store.get('suggestions.list') || [];
    const current = list.find(s => s.id === id);
    if (!current) return null;

    store.set('suggestions.lastAccepted', Date.now());
    const updatedList = list.filter(s => s.id !== id);
    store.set('suggestions.list', updatedList);

    const subtopics = current.subtopics || [];
    const pipeline = subtopics.length > 0
      ? subtopics.map((s, i) => ({ id: `step_${i}`, title: s, done: false }))
      : [
          { id: 'step_0', title: `Plan and prepare for: ${current.title}`, done: false },
          { id: 'step_1', title: `Work through ${current.title}`, done: false },
          { id: 'step_2', title: 'Review and summarize what you learned', done: false },
        ];

    const mission = {
      id: `mission_${Date.now()}`,
      title: current.title,
      notes: current.notes,
      category: current.category || 'productivity',
      xp: current.xp || 100,
      pipeline,
      status: 'pending',
      progress: 0,
      created: Date.now(),
      type: 'suggested',
      comic: `/comics/comic_${Math.floor(Math.random() * 13) + 1}.jpg`,
    };

    const pending = store.get('missions.pending') || [];
    pending.push(mission);
    store.set('missions.pending', pending);
    if (!store.get('missions.current')) store.set('missions.current', mission);

    missionEngine.emit('mission-created', mission);
    return mission;
  }

  shouldAskFollowUp(intent, conversationCount) {
    if (conversationCount < 3) return true;
    if (intent.primary === 'casual' && conversationCount > 5) return false;
    return Math.random() < 0.3;
  }
}

export const decisionEngine = new DecisionEngine();
