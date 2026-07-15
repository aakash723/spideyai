import { EngineBase } from './core.js';
import { store } from './data-store.js';

export class MemoryEngine extends EngineBase {
  constructor() {
    super('MemoryEngine');
    this._ensureStore();
  }

  _ensureStore() {
    if (!store.get('memory.facts')) store.set('memory.facts', []);
  }

  remember(key, value, confidence = 1, source = 'conversation', category = 'general') {
    const facts = store.get('memory.facts');
    const existing = facts.find(f => f.key === key);
    const entry = {
      key,
      value: typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value,
      confidence: Math.min(confidence, 1),
      source,
      category,
      updated: Date.now()
    };
    if (existing) {
      Object.assign(existing, entry);
      existing.confidence = Math.min(existing.confidence + 0.05, 1);
    } else {
      entry.created = Date.now();
      facts.push(entry);
    }
    store.set('memory.facts', facts);
    this.emit('remembered', entry);
    return entry;
  }

  recall(category, limit = 10) {
    const facts = store.get('memory.facts') || [];
    let filtered = category ? facts.filter(f => f.category === category) : facts;
    filtered.sort((a, b) => b.confidence - a.confidence);
    return filtered.slice(0, limit);
  }

  recallByKey(key) {
    return (store.get('memory.facts') || []).find(f => f.key === key) || null;
  }

  recallByPattern(pattern) {
    const regex = new RegExp(pattern, 'i');
    return (store.get('memory.facts') || []).filter(f => regex.test(f.key) || regex.test(JSON.stringify(f.value)));
  }

  forget(key) {
    const facts = store.get('memory.facts') || [];
    store.set('memory.facts', facts.filter(f => f.key !== key));
    this.emit('forgotten', { key });
  }

  getRecent(count = 5) {
    const facts = store.get('memory.facts') || [];
    return facts.sort((a, b) => b.updated - a.updated).slice(0, count);
  }

  getAllCategories() {
    const facts = store.get('memory.facts') || [];
    return [...new Set(facts.map(f => f.category))];
  }
}

export const memory = new MemoryEngine();
