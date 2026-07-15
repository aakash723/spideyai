import { EngineBase } from './core.js';

const TOPIC_MAP = {
  'neural networks': {
    category: 'AI/ML',
    description: 'Computing systems inspired by biological neural networks.',
    resources: [
      { type: 'youtube', title: '3Blue1Brown Neural Networks', url: 'https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi' },
      { type: 'article', title: 'CS231n Stanford', url: 'https://cs231n.github.io/' },
      { type: 'course', title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning' },
    ]
  },
  'python': {
    category: 'Programming',
    description: 'A high-level general-purpose programming language.',
    resources: [
      { type: 'youtube', title: 'Python for Beginners', url: 'https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg' },
      { type: 'article', title: 'Real Python Tutorials', url: 'https://realpython.com/' },
      { type: 'course', title: 'Python Crash Course', url: 'https://ehmatthes.github.io/pcc/' },
    ]
  },
  'javascript': {
    category: 'Programming',
    description: 'Language of the web — runs everywhere.',
    resources: [
      { type: 'youtube', title: 'JavaScript Mastery', url: 'https://youtube.com/c/JavaScriptMastery' },
      { type: 'article', title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    ]
  },
  'machine learning': {
    category: 'AI/ML',
    description: 'Field of study giving computers the ability to learn without explicit programming.',
    resources: [
      { type: 'youtube', title: 'StatQuest Machine Learning', url: 'https://youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1' },
      { type: 'course', title: 'Andrew Ng ML Course', url: 'https://www.coursera.org/learn/machine-learning' },
    ]
  },
  'calculus': {
    category: 'Mathematics',
    description: 'The mathematical study of continuous change.',
    resources: [
      { type: 'youtube', title: 'Professor Leonard Calculus', url: 'https://youtube.com/playlist?list=PLF797E961509B4EB5' },
      { type: 'article', title: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-1' },
    ]
  },
  'data structures': {
    category: 'Computer Science',
    description: 'Ways of organizing and storing data efficiently.',
    resources: [
      { type: 'youtube', title: 'MIT 6.006 Algorithms', url: 'https://youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY' },
      { type: 'article', title: 'GeeksforGeeks DSA', url: 'https://www.geeksforgeeks.org/data-structures/' },
    ]
  },
  'physics': {
    category: 'Science',
    description: 'The study of matter, energy, and their interactions.',
    resources: [
      { type: 'youtube', title: 'Physics with Professor Matt Anderson', url: 'https://youtube.com/c/PhysicswithProfessorMattAnderson' },
      { type: 'article', title: 'The Physics Classroom', url: 'https://www.physicsclassroom.com/' },
    ]
  },
};

export class KnowledgeEngine extends EngineBase {
  constructor() {
    super('KnowledgeEngine');
  }

  lookup(topic) {
    const key = topic.toLowerCase().trim();
    for (const [name, data] of Object.entries(TOPIC_MAP)) {
      if (key.includes(name) || name.includes(key)) {
        return { topic: name, ...data };
      }
    }
    return null;
  }

  search(query) {
    const q = query.toLowerCase();
    return Object.entries(TOPIC_MAP)
      .filter(([name, data]) =>
        name.includes(q) ||
        data.category.toLowerCase().includes(q) ||
        data.description.toLowerCase().includes(q)
      )
      .map(([name, data]) => ({ topic: name, ...data }));
  }

  getCategories() {
    return [...new Set(Object.values(TOPIC_MAP).map(t => t.category))];
  }

  getAllTopics() {
    return Object.keys(TOPIC_MAP);
  }
}

export const knowledge = new KnowledgeEngine();
