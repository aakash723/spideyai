import { EngineBase } from './core.js';
import { memory } from './memory-engine.js';
import { store } from './data-store.js';

export class PredictionEngine extends EngineBase {
  constructor() {
    super('PredictionEngine');
  }

  predict() {
    const habits = store.get('habits.detected') || [];
    const scheduleFacts = memory.recall('schedule', 20);
    const predictions = [];

    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    for (const habit of habits) {
      if (habit.confidence > 40) {
        predictions.push({
          activity: habit.key,
          probability: habit.confidence,
          timeframe: this._estimateTimeframe(habit.key, hour, day),
          source: 'habit'
        });
      }
    }

    for (const fact of scheduleFacts) {
      const val = typeof fact.value === 'object' ? fact.value : { description: fact.value };
      predictions.push({
        activity: val.description || fact.key,
        probability: Math.round(fact.confidence * 100),
        timeframe: val.time ? `${val.time}` : 'today',
        source: 'schedule'
      });
    }

    predictions.sort((a, b) => b.probability - a.probability);
    store.set('predictions', predictions);
    this.emit('predicted', predictions);
    return predictions;
  }

  _estimateTimeframe(habit, hour, day) {
    if (habit.includes('study') || habit.includes('code')) {
      if (hour < 12) return 'this morning';
      if (hour < 17) return 'this afternoon';
      return 'this evening';
    }
    if (habit.includes('gym') || habit.includes('workout')) {
      return hour < 12 ? 'this afternoon' : 'this evening';
    }
    return 'today';
  }

  getNextPrediction() {
    const predictions = store.get('predictions') || [];
    return predictions.length > 0 ? predictions[0] : null;
  }
}

export const predictionEngine = new PredictionEngine();
