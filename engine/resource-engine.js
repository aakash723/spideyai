import { EngineBase } from './core.js';
import { knowledge } from './knowledge-engine.js';

export class ResourceEngine extends EngineBase {
  constructor() {
    super('ResourceEngine');
  }

  recommend(topic, limit = 3) {
    const info = knowledge.lookup(topic);
    if (!info || !info.resources) return [];
    return info.resources.slice(0, limit);
  }

  recommendBySubjects(subjects, limit = 3) {
    const all = [];
    for (const subj of subjects) {
      const info = knowledge.lookup(subj);
      if (info && info.resources) all.push(...info.resources);
    }
    return all.slice(0, limit);
  }
}

export const resourceEngine = new ResourceEngine();
