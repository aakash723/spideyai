import { EngineBase } from './core.js';

const INTENT_PATTERNS = {
  exam: [
    /\b(exam|test|quiz|midterm|final|assessment)\b/i,
    /\b(i have\s+\w+\s+(exam|test))\b/i,
    /\b(studying for|preparing for)\s+\w+\s+(exam|test)\b/i,
  ],
  study: [
    /\b(i\s+(need to|should|will|want to|gonna|am going to)\s+study)\b/i,
    /\b(study|learn|read about|research)\b/i,
    /\b(i have\s+\w+\s+(class|lecture|seminar|workshop))\b/i,
    /\b(homework|assignment|project|due)\b/i,
    /\bteach me\b/i,
  ],
  schedule: [
    /\b(schedule|plan|remind|reminder|set|organize)\b/i,
    /\b(i have\s+\w+\s+(at|on|tomorrow))\b/i,
    /\b(at\s+\d|at\s+\w+:\w+)\b/i,
  ],
  weather: [
    /\b(weather|rain|sunny|cloudy|temperature|cold|hot|forecast)\b/i,
  ],
  gym: [
    /\b(gym|workout|exercise|fitness)\b/i,
    /\b(i\s+(need to|should|will|gonna)\s+(work out|gym|exercise))\b/i,
  ],
  food: [
    /\b(hungry|eat|lunch|dinner|breakfast|food|coffee|pizza|hunger|cook)\b/i,
  ],
  casual: [
    /\b(hello|hi|hey|sup|howdy|yo|whatsup|wassup)\b/i,
    /\b(how are you|how's it going|what's up)\b/i,
    /\b(nice|great|awesome|cool|amazing|fantastic)\b/i,
    /\b(joke|funny|lol|lmao|haha)\b/i,
    /\b(thanks|thank you|thx)\b/i,
  ],
  goal: [
    /\b(i\s+(want to|wanna|aim to|plan to|hope to)\s+\w+)\b/i,
    /\b(my\s+goal|my\s+target|my aim|my objective)\b/i,
  ],
  location: [
    /\b(where\s+(is|are|am|can|do))\b/i,
    /\b(going to|heading to|at the|near)\b/i,
    /\b(direction|route|map|location)\b/i,
  ],
  media: [
    /\b(watch|view|stream|listen to)\s+.+\s+(on|in)\s+(youtube)\b/i,
    /\b(youtube)\s+.+(trailer|video|clip)\b/i,
    /\b(play)\s+.+\s+(video|movie|trailer)\b/i,
    /\b(trailer)\b/i,
  ],
  help: [
    /\b(help|how do|what is|what are|what's|explain|tell me about)\b/i,
    /\b(can you|would you|could you)\b/i,
    /\bteach me\b/i,
    /\bwhat does\b/i,
    /\bhow does\b/i,
    /\bdefine\b/i,
  ]
};

export class IntentClassifier extends EngineBase {
  constructor() {
    super('IntentClassifier');
  }

  classify(text) {
    const scores = {};
    for (const [intent, patterns] of Object.entries(INTENT_PATTERNS)) {
      let score = 0;
      for (const pattern of patterns) {
        if (pattern.test(text)) {
          score += 0.3;
          const matchLen = text.match(pattern)[0].length;
          score += (matchLen / text.length) * 0.4;
        }
      }
      if (score > 0) scores[intent] = Math.min(score + 0.2, 1);
    }

    const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const top = entries[0];

    const result = {
      primary: top ? top[0] : 'casual',
      confidence: top ? top[1] : 0.3,
      all: Object.fromEntries(entries),
      raw: text
    };

    this.emit('classified', result);
    return result;
  }
}

export const intentClassifier = new IntentClassifier();
