import { EngineBase } from './core.js';
import { memory } from './memory-engine.js';
import { store } from './data-store.js';

export class HabitEngine extends EngineBase {
  constructor() {
    super('HabitEngine');
    this._interval = null;
  }

  start(intervalMs = 120000) {
    this.analyze();
    this._interval = setInterval(() => this.analyze(), intervalMs);
  }

  stop() {
    if (this._interval) { clearInterval(this._interval); this._interval = null; }
  }

  analyze() {
    const facts = memory.recall('habit', 50);
    const habits = {};

    for (const fact of facts) {
      const key = fact.key;
      const baseKey = key.replace(/:\d+$/, '').replace(/:time$/, '');
      if (!habits[baseKey]) habits[baseKey] = { count: 0, totalConfidence: 0, lastSeen: 0, category: fact.category };
      habits[baseKey].count++;
      habits[baseKey].totalConfidence += fact.confidence;
      habits[baseKey].lastSeen = Math.max(habits[baseKey].lastSeen, fact.updated);
    }

    const result = [];
    for (const [key, data] of Object.entries(habits)) {
      const avgConf = data.totalConfidence / data.count;
      const recency = (Date.now() - data.lastSeen) / (1000 * 60 * 60 * 24);
      const recencyScore = Math.max(0, 1 - recency / 14);
      const score = Math.min(1, avgConf * 0.6 + recencyScore * 0.4);
      result.push({ key, confidence: Math.round(score * 100), occurrences: data.count, category: data.category });
    }

    result.sort((a, b) => b.confidence - a.confidence);
    store.set('habits.detected', result);
    this.emit('analyzed', result);
    return result;
  }

  getStreaks(category, days = 14) {
    const facts = memory.recall(category, 50);
    if (facts.length === 0) return { current: 0, longest: 0 };

    const dates = facts.map(f => {
      const d = new Date(f.updated);
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    });
    const uniqueDays = [...new Set(dates)].sort().reverse();

    let current = 0;
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

    for (let i = 0; i < uniqueDays.length; i++) {
      const d = new Date(uniqueDays[i]);
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      const expectedStr = `${expected.getFullYear()}-${expected.getMonth()}-${expected.getDate()}`;
      if (uniqueDays[i] === expectedStr) current++;
      else break;
    }

    let longest = 0;
    let streak = 1;
    for (let i = 1; i < uniqueDays.length; i++) {
      const d1 = new Date(uniqueDays[i-1]);
      const d2 = new Date(uniqueDays[i]);
      const diff = (d1 - d2) / (1000 * 60 * 60 * 24);
      if (diff === 1) streak++;
      else { longest = Math.max(longest, streak); streak = 1; }
    }
    longest = Math.max(longest, streak);

    return { current, longest };
  }
}

export const habitEngine = new HabitEngine();
