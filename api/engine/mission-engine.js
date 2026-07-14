import { EngineBase } from './core.js';
import { memory } from './memory-engine.js';
import { store } from './data-store.js';
import { knowledge } from './knowledge-engine.js';
import { resourceEngine } from './resource-engine.js';

const RECURRING_DEFAULTS = [
  { id: 'recur_drink_water', title: 'Drink Water', category: 'productivity', xp: 30, frequency: 'daily' },
  { id: 'recur_read_10min', title: 'Read 10 mins', category: 'learning', xp: 50, frequency: 'daily' },
  { id: 'recur_workout', title: 'Workout', category: 'fitness', xp: 80, frequency: 'weekdays' },
  { id: 'recur_study_review', title: 'Study Review', category: 'learning', xp: 100, frequency: 'weekly' },
  { id: 'recur_doodle', title: 'Doodle or Sketch', category: 'creativity', xp: 40, frequency: 'daily' },
];

const COMIC_COUNT = 13;

const INDOOR_TASKS = [
  { title: 'Study Session', category: 'learning', xp: 150, duration: 60 },
  { title: 'Read a Chapter', category: 'learning', xp: 100, duration: 45 },
  { title: 'Code Practice', category: 'productivity', xp: 200, duration: 90 },
  { title: 'Write Journal', category: 'creativity', xp: 80, duration: 30 },
  { title: 'Online Course', category: 'learning', xp: 180, duration: 60 },
  { title: 'Meditate', category: 'productivity', xp: 60, duration: 15 },
  { title: 'Stretch Routine', category: 'fitness', xp: 50, duration: 20 },
  { title: 'Clean Workspace', category: 'productivity', xp: 40, duration: 20 },
  { title: 'Organize Files', category: 'productivity', xp: 60, duration: 30 },
  { title: 'Practice Guitar', category: 'creativity', xp: 70, duration: 30 },
  { title: 'Sketch or Doodle', category: 'creativity', xp: 60, duration: 25 },
  { title: 'Learn an Instrument', category: 'creativity', xp: 90, duration: 40 },
];

const OUTDOOR_TASKS = [
  { title: 'Gym Workout', category: 'fitness', xp: 200, duration: 60 },
  { title: 'Morning Run', category: 'fitness', xp: 150, duration: 30 },
  { title: 'Skate Session', category: 'fun', xp: 120, duration: 45 },
  { title: 'Walk in Park', category: 'fun', xp: 80, duration: 30 },
  { title: 'Coffee Meeting', category: 'fun', xp: 60, duration: 45 },
  { title: 'Errands', category: 'productivity', xp: 50, duration: 60 },
  { title: 'Photography Walk', category: 'creativity', xp: 70, duration: 45 },
  { title: 'Basketball', category: 'fitness', xp: 180, duration: 60 },
  { title: 'Street Photography', category: 'creativity', xp: 75, duration: 40 },
];

export class MissionEngine extends EngineBase {
  constructor() {
    super('MissionEngine');
  }

  async createFromIntent(intent, entities, weatherData) {
    const isRaining = weatherData && (weatherData.current?.weathercode >= 51);
    const subjects = entities.subjects;
    const times = entities.times;
    const dates = entities.dates;

    let mission = null;

    if (intent.primary === 'exam' || intent.primary === 'study') {
      mission = this._createStudyMission(subjects, times, dates);
    } else if (intent.primary === 'gym') {
      mission = this._createGymMission(isRaining);
    } else if (intent.primary === 'schedule') {
      mission = this._createScheduleMission(entities, isRaining);
    } else if (intent.primary === 'media') {
      mission = this._createMediaMission(subjects, times, dates);
    } else {
      mission = this._createAutoMission(isRaining);
    }

    if (mission) {
      mission.comic = `/comics/comic_${Math.floor(Math.random() * COMIC_COUNT) + 1}.jpg`;
      mission.id = `mission_${Date.now()}`;
      mission.created = Date.now();
      mission.status = 'pending';
      mission.progress = 0;

      if (subjects.length > 0) {
        const resources = resourceEngine.recommendBySubjects(subjects);
        if (resources.length > 0) mission.resources = resources;
      }

      const missions = store.get('missions.pending') || [];
      missions.push(mission);
      store.set('missions.pending', missions);
      if (!store.get('missions.current')) store.set('missions.current', mission);

      memory.remember(`mission:${mission.id}`, mission, 1, 'system', 'mission');
      this.emit('mission-created', mission);
    }

    return mission;
  }

  activateMission(id) {
    const missions = store.get('missions.pending') || [];
    const idx = missions.findIndex(m => m.id === id);
    if (idx === -1) return false;
    store.set('missions.current', missions[idx]);
    this.emit('mission-activated', missions[idx]);
    return true;
  }

  completeMission(id, options) {
    const current = store.get('missions.current');
    if (current && current.id === id) {
      const xp = current.xp || 100;
      if (!options?.skipXp) {
        const totalXp = store.get('user.xp') || 0;
        store.set('user.xp', totalXp + xp);
        const level = store.get('user.level') || 1;
        const nextLevel = Math.floor((totalXp + xp) / 1000) + 1;
        if (nextLevel > level) store.set('user.level', nextLevel);
      }

      this._checkAchievements();

      const completed = store.get('missions.completed') || [];
      completed.push({ ...current, completedAt: Date.now() });
      store.set('missions.completed', completed);

      store.set('missions.current', null);
      store.set('missions.pending', (store.get('missions.pending') || []).filter(m => m.id !== id));

      memory.remember(`completed:${id}`, current, 1, 'system', 'achievement');
      this.emit('mission-completed', { mission: current, xp });
      return { mission: current, xp };
    }
    return null;
  }

  completePipelineStep(missionId, stepId) {
    let current = store.get('missions.current');
    let pending = store.get('missions.pending') || [];
    const allM = current ? [current, ...pending] : [...pending];
    const mission = allM.find(m => m.id === missionId);
    if (!mission || !mission.pipeline) return null;

    const step = mission.pipeline.find(s => s.id === stepId);
    if (!step || step.done) return null;

    step.done = true;

    const totalSteps = mission.pipeline.length;
    const doneSteps = mission.pipeline.filter(s => s.done).length;
    const xpPerStep = Math.floor((mission.xp || 100) / totalSteps);
    const remainder = (mission.xp || 100) - xpPerStep * totalSteps;
    const stepXp = doneSteps === totalSteps ? xpPerStep + remainder : xpPerStep;

    const totalXp = store.get('user.xp') || 0;
    store.set('user.xp', totalXp + stepXp);
    const level = store.get('user.level') || 1;
    const nextLevel = Math.floor((totalXp + stepXp) / 1000) + 1;
    if (nextLevel > level) store.set('user.level', nextLevel);

    // Update store
    if (current && current.id === missionId) store.set('missions.current', { ...mission });
    else store.set('missions.pending', pending.map(m => m.id === missionId ? { ...m, pipeline: mission.pipeline } : m));

    this.emit('pipeline-step', { missionId, stepId, title: step.title, xp: stepXp, done: doneSteps, total: totalSteps });

    // All steps done → auto-complete
    if (doneSteps === totalSteps) {
      current = store.get('missions.current');
      if (current && current.id === missionId) {
        this.completeMission(missionId, { skipXp: true });
      } else {
        // Pending mission complete: auto-promote, then complete
        pending = store.get('missions.pending') || [];
        const target = pending.find(m => m.id === missionId);
        if (target) {
          store.set('missions.current', { ...target, pipeline: mission.pipeline });
          store.set('missions.pending', pending.filter(m => m.id !== missionId));
          this.completeMission(missionId, { skipXp: true });
        }
      }
      return { completed: true, stepXp, doneSteps, totalSteps };
    }

    return { completed: false, stepXp, doneSteps, totalSteps };
  }

  getPipelineProgress(mission) {
    if (!mission || !mission.pipeline || mission.pipeline.length === 0) return { done: 0, total: 0, pct: 0 };
    const done = mission.pipeline.filter(s => s.done).length;
    return { done, total: mission.pipeline.length, pct: Math.round((done / mission.pipeline.length) * 100) };
  }

  updateProgress(id, pct) {
    const current = store.get('missions.current');
    if (current && current.id === id) {
      current.progress = Math.min(pct, 100);
      store.set('missions.current', current);
      this.emit('mission-progress', { id, progress: pct });
    }
  }

  _initRecurring() {
    const existing = store.get('recurringQuests');
    if (!existing || existing.length === 0) {
      store.set('recurringQuests', RECURRING_DEFAULTS.map(r => ({ ...r, lastCompleted: null })));
    }
  }

  getRecurringDue() {
    this._initRecurring();
    const recurring = store.get('recurringQuests') || [];
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const day = now.getDay(); // 0=Sun, 6=Sat
    const isWeekday = day >= 1 && day <= 5;

    return recurring.filter(r => {
      if (!r.lastCompleted) return true;
      const last = new Date(r.lastCompleted);
      const daysSince = (today - last) / 86400000;
      if (r.frequency === 'daily') return daysSince >= 1;
      if (r.frequency === 'weekdays') return isWeekday && daysSince >= 1;
      if (r.frequency === 'weekly') return daysSince >= 7;
      return false;
    });
  }

  completeRecurringQuest(id) {
    const recurring = store.get('recurringQuests') || [];
    const r = recurring.find(q => q.id === id);
    if (!r) return false;
    const now = new Date();
    r.lastCompleted = now.toISOString();
    store.set('recurringQuests', [...recurring]);
    const totalXp = store.get('user.xp') || 0;
    store.set('user.xp', totalXp + r.xp);
    this.emit('recurring-completed', r);
    return true;
  }

  generateSideQuests(weatherData) {
    const isRaining = weatherData && (weatherData.current?.weathercode >= 51);
    const pool = isRaining ? INDOOR_TASKS : [...INDOOR_TASKS, ...OUTDOOR_TASKS];
    const shuffled = pool.sort(() => Math.random() - 0.5);
    const count = Math.min(4, shuffled.length);
    const quests = [];
    for (let i = 0; i < count; i++) {
      quests.push({
        id: `quest_${Date.now()}_${i}`,
        title: shuffled[i].title,
        category: shuffled[i].category,
        xp: shuffled[i].xp,
        duration: shuffled[i].duration,
        completed: false,
      });
    }

    // Merge recurring quests that are due
    const dueRecurring = this.getRecurringDue();
    for (const r of dueRecurring) {
      if (!quests.find(q => q.id === r.id)) {
        quests.push({
          id: r.id,
          title: r.title,
          category: r.category,
          xp: r.xp,
          recurring: true,
          frequency: r.frequency,
          completed: false,
        });
      }
    }

    store.set('sideQuests', quests);
    this.emit('quests-generated', quests);
    return quests;
  }

  completeQuest(id) {
    const quests = store.get('sideQuests') || [];
    const q = quests.find(q => q.id === id);
    if (q && !q.completed) {
      q.completed = true;
      store.set('sideQuests', quests);

      // If recurring, update its lastCompleted and re-queue
      if (q.recurring) {
        this.completeRecurringQuest(q.id);
      } else {
        const totalXp = store.get('user.xp') || 0;
        store.set('user.xp', totalXp + (q.xp || 30));
      }

      this.emit('quest-completed', q);
    }
  }

  _createStudyMission(subjects, times, dates) {
    const subj = subjects.length > 0 ? subjects[0] : 'your subject';
    const timeStr = times.length > 0 ? `${String(times[0].hour).padStart(2,'0')}:${String(times[0].minute).padStart(2,'0')}` : '';
    const dateStr = dates.length > 0 ? (dates[0].type === 'relative' ? (dates[0].value === 0 ? 'today' : dates[0].value === 1 ? 'tomorrow' : `in ${dates[0].value} days`) : '') : '';
    const info = knowledge.lookup(subj);

    return {
      title: `Study ${subj.charAt(0).toUpperCase() + subj.slice(1)}`,
      category: 'learning',
      eta: timeStr ? `${dateStr} ${timeStr}`.trim() : dateStr || 'Today',
      reward: info ? 200 : 150,
      xp: info ? 200 : 150,
      description: info ? info.description : `Study session for ${subj}`,
      resources: info ? info.resources : [],
      type: 'learning',
    };
  }

  _createGymMission(isRaining) {
    if (isRaining) {
      return {
        title: 'Indoor Workout',
        category: 'fitness',
        eta: 'Today',
        reward: 120,
        xp: 120,
        description: 'Rain detected — indoor workout instead of gym.',
        type: 'fitness',
      };
    }
    return {
      title: 'Gym Session',
      category: 'fitness',
      eta: 'Today',
      reward: 150,
      xp: 150,
      description: 'Head to the gym for a solid workout.',
      type: 'fitness',
    };
  }

  _createScheduleMission(entities, isRaining) {
    const subjects = entities.subjects;
    const locations = entities.locations;
    const title = subjects.length > 0 ? `${subjects[0].charAt(0).toUpperCase() + subjects[0].slice(1)} Session` : 'Scheduled Task';
    return {
      title,
      category: 'productivity',
      eta: 'Today',
      reward: 100,
      xp: 100,
      description: locations.length > 0 ? `At ${locations[0]}` : 'On your schedule.',
      type: 'schedule',
    };
  }

  _createMediaMission(subjects, times, dates) {
    const topic = subjects.length > 0 ? subjects.slice(0, 3).join(' ') : 'Video';
    const timeStr = times.length > 0 ? `${String(times[0].hour).padStart(2,'0')}:${String(times[0].minute).padStart(2,'0')}` : '';
    const searchQuery = encodeURIComponent(topic);
    return {
      title: `Watch ${topic.charAt(0).toUpperCase() + topic.slice(1)}`,
      category: 'fun',
      eta: timeStr || 'Today',
      reward: 50,
      xp: 50,
      description: `Reminder to watch ${topic} on YouTube.`,
      type: 'fun',
      resources: [
        { type: 'youtube', title: `Search: ${topic}`, url: `https://m.youtube.com/results?search_query=${searchQuery}` }
      ],
    };
  }

  _createAutoMission(isRaining) {
    const pool = isRaining ? INDOOR_TASKS : [...INDOOR_TASKS, ...OUTDOOR_TASKS];
    const task = pool[Math.floor(Math.random() * pool.length)];
    return {
      title: task.title,
      category: task.category,
      eta: 'Today',
      reward: task.xp,
      xp: task.xp,
      description: `Estimated ${task.duration} minutes.`,
      type: task.category,
    };
  }

  _checkAchievements() {
    const completed = store.get('missions.completed') || [];
    const total = completed.length;
    const achievements = store.get('user.achievements') || [];

    if (total >= 1 && !achievements.includes('first_mission')) {
      achievements.push('first_mission');
      this.emit('achievement', { id: 'first_mission', title: 'First Step', text: 'Completed your first mission!' });
    }
    if (total >= 5 && !achievements.includes('five_missions')) {
      achievements.push('five_missions');
      this.emit('achievement', { id: 'five_missions', title: 'Getting Started', text: 'Completed 5 missions!' });
    }
    if (total >= 10 && !achievements.includes('ten_missions')) {
      achievements.push('ten_missions');
      this.emit('achievement', { id: 'ten_missions', title: 'Dedicated Hero', text: 'Completed 10 missions!' });
    }

    const streaks = store.get('habits.detected') || [];
    for (const s of streaks) {
      if (s.confidence >= 90 && !achievements.includes(`streak_${s.key}`)) {
        achievements.push(`streak_${s.key}`);
        this.emit('achievement', { id: `streak_${s.key}`, title: 'Streak Master', text: `Strong ${s.key} habit!` });
      }
    }

    store.set('user.achievements', achievements);
  }
}

export const missionEngine = new MissionEngine();
