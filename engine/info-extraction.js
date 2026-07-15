import { EngineBase } from './core.js';

const TIME_PATTERNS = [
  /\b(\d{1,2}):(\d{2})\s*(am|pm)?\b/gi,
  /\b(\d{1,2})\s*(am|pm)\b/gi,
  /\b(noon|midnight)\b/gi
];

const DATE_PATTERNS = [
  /\b(today|tomorrow|yesterday)\b/gi,
  /\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/gi,
  /\b(next\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b/gi,
  /\b(this\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b/gi,
  /\b(\d{1,2})(st|nd|rd|th)?\s+(january|february|march|april|may|june|july|august|september|october|november|december)\b/gi,
  /\b(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{1,2})(st|nd|rd|th)?\b/gi
];

const SUBJECT_PATTERNS = [
  /\b(neural\s*network[s]?|deep\s*learning|machine\s*learning|artificial\s*intelligence|ai)\b/gi,
  /\b(calculus|algebra|geometry|trigonometry|statistics|probability)\b/gi,
  /\b(python|javascript|java|c\+\+|rust|go|typescript|swift|kotlin)\b/gi,
  /\b(physics|chemistry|biology|astronomy|science)\b/gi,
  /\b(history|geography|economics|psychology|philosophy)\b/gi,
  /\b(data\s*structure[s]?|algorithm[s]?|operating\s*system[s]?|computer\s*network[s]?|dbms|sql)\b/gi,
  /\b(web\s*dev|app\s*dev|software\s*engineer|programming|coding)\b/gi,
  /\b(english|literature|writing|grammar)\b/gi,
  /\b(spiderman|spider-man|spider\s*man)\b/gi,
  /\b(trailer|video|movie|clip|short)\b/gi
];

const ACTIVITY_PATTERNS = [
  /\b(study|read|learn|practice|review|research)\b/gi,
  /\b(exam|test|quiz|assignment|project|homework|presentation)\b/gi,
  /\b(gym|workout|exercise|run|jog|walk|skate|swim|cycle|yoga|stretch)\b/gi,
  /\b(eat|lunch|dinner|breakfast|cook|food|coffee)\b/gi,
  /\b(meet|hang|party|movie|game|play|chill|relax)\b/gi,
  /\b(work|meeting|class|lecture|seminar|workshop)\b/gi,
  /\b(sleep|rest|nap|break)\b/gi,
  /\b(code|debug|build|develop|design|create)\b/gi,
  /\b(watch|view|stream|listen|play)\b/gi
];

const LOCATION_PATTERNS = [
  /\b(library|cafe|coffee\s*shop|restaurant|gym|park|school|college|university|office|home|lab)\b/gi,
  /\b(at\s+the\s+\w+)\b/gi,
  /\b(in\s+\w+)\b/gi,
  /\b(youtube)\b/gi
];

const PEOPLE_PATTERNS = [
  /\b(professor|teacher|instructor|mentor|friend|mom|dad|brother|sister|boss|colleague)\b/gi
];

function extractAll(regexList, text) {
  const results = [];
  for (const regex of regexList) {
    let m;
    while ((m = regex.exec(text)) !== null) {
      results.push(m[0].toLowerCase());
    }
  }
  return [...new Set(results)];
}

function normalizeTime(match) {
  let h = 0, m = 0;
  if (match.includes('noon')) return { hour: 12, minute: 0 };
  if (match.includes('midnight')) return { hour: 0, minute: 0 };
  const parts = match.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);
  if (parts) {
    h = parseInt(parts[1]);
    m = parts[2] ? parseInt(parts[2]) : 0;
    if (parts[3] && parts[3].toLowerCase() === 'pm' && h < 12) h += 12;
    if (parts[3] && parts[3].toLowerCase() === 'am' && h === 12) h = 0;
  }
  return { hour: h, minute: m };
}

function normalizeDate(match) {
  const m = match.toLowerCase();
  if (m === 'today') return { type: 'relative', value: 0 };
  if (m === 'tomorrow') return { type: 'relative', value: 1 };
  if (m === 'yesterday') return { type: 'relative', value: -1 };
  const dayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  for (let i = 0; i < 7; i++) {
    if (m.includes(dayNames[i])) {
      const today = new Date().getDay();
      let diff = i - today;
      if (m.includes('next')) diff += 7;
      if (diff <= 0 && !m.includes('next') && !m.includes('this')) diff += 7;
      return { type: 'relative', value: diff };
    }
  }
  return { type: 'absolute', raw: match };
}

export class InfoExtraction extends EngineBase {
  constructor() {
    super('InfoExtraction');
  }

  extract(text) {
    const result = {
      times: extractAll(TIME_PATTERNS, text).map(normalizeTime),
      dates: extractAll(DATE_PATTERNS, text).map(normalizeDate),
      subjects: extractAll(SUBJECT_PATTERNS, text),
      activities: extractAll(ACTIVITY_PATTERNS, text),
      locations: extractAll(LOCATION_PATTERNS, text).map(s => s.replace(/^(at the|at|in)\s+/i, '')),
      people: extractAll(PEOPLE_PATTERNS, text),
      raw: text
    };
    this.emit('extracted', result);
    return result;
  }
}

export const infoExtraction = new InfoExtraction();
