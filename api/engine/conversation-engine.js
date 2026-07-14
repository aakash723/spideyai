import { EngineBase } from './core.js';
import { memory } from './memory-engine.js';
import { store } from './data-store.js';
import { toolExecutor } from './tool-executor.js';
import { processMessage } from '../tools/extractor.js';

export class ConversationEngine extends EngineBase {
  constructor() {
    super('ConversationEngine');
    this.conversationCount = 0;
    this.history = [];
  }

  _isSimpleGreeting(msg) {
    const cleaned = msg.replace(/^(?:hey|hi|hello|sup|yo|wassup|howdy)\s*(?:spidey|spider|ai)?\s*/i, '').trim();
    if (!cleaned) return true;
    if (/^(?:what|how|why|when|where|who|can|could|will|would|do|did|does|tell|teach|explain|show|play|navigate|create|remind|remember|make|set|add)/i.test(cleaned)) return false;
    if (/\b(?:teach|learn|explain|help|question|define|meaning|what is|how does|how to|tell me)\b/i.test(cleaned)) return false;
    return true;
  }

  async process(intent, entities) {
    this.conversationCount++;
    const message = intent.raw || '';

    if (this.conversationCount === 1 && this._isSimpleGreeting(message)) {
      const hour = new Date().getHours();
      const prefix = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
      const responses = [
        `Hey! Good ${prefix}! Uh, sorry I'm a little out of breath — was just swinging around the city. What's on your mind?`,
        `Oh hey! Good ${prefix}! I was just grabbing a hot dog from that cart on 42nd. What's up?`,
        `Hey! Good ${prefix}! Hope your day's going better than my web fluid budget. What can I help with?`,
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      this.history.push({ user: message, ai: response });
      this.emit('response', response);
      return response;
    }

    try {
      const res = await fetch('/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: this.history }),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      const data = await res.json();
      let response = data.response || '';
      const tools = data.tools || [];
      if (!response && tools.length > 0) {
        const toolMsgs = {
          navigate_to: (a) => `Heading to ${a.location || 'your destination'}!`,
          create_mission: (a) => `Created ${a.type === 'challenge' ? 'challenge' : 'mission'}: ${a.title || 'New Task'}!`,
          check_weather: () => `Let me check the weather for you!`,
          set_reminder: (a) => `Reminder set: ${a.text || ''}`,
          play_media: (a) => `Opening ${a.query || 'that'}...`,
          set_location: (a) => `Saved ${a.name} as ${a.address}!`,
        };
        response = tools.map(t => toolMsgs[t.name]?.(t.args) || '').filter(Boolean).join(' ');
      }
      if (!response) response = 'Got it!';
      await toolExecutor.execute(tools);
      this._remember(message, response);
      return response;
    } catch {
      const savedLocations = store.get('user.locations') || {};
      const local = processMessage(message, { history: this.history, savedLocations });
      await toolExecutor.execute(local.tools);
      this._remember(message, local.response);
      return local.response;
    }
  }

  _remember(message, response) {
    this.history.push({ user: message, ai: response });
    if (this.history.length > 20) this.history = this.history.slice(-20);
    memory.remember(`chat:${Date.now()}`, { text: message, response }, 0.9, 'conversation', 'chat');
    this.emit('response', response);
  }
}

export const conversationEngine = new ConversationEngine();
