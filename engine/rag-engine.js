import { EngineBase } from './core.js';
import { store } from './data-store.js';

export class RAGEngine extends EngineBase {
  constructor() {
    super('RAGEngine');
  }

  async addDocument(text, topic = 'general') {
    try {
      const res = await fetch('/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, content: text })
      });
      const data = await res.json();
      if (data.chunks > 0) {
        const count = store.get('rag.documentCount') || 0;
        store.set('rag.documentCount', count + 1);
        this.emit('document-added', { topic, chunks: data.chunks });
      }
      return data.chunks || 0;
    } catch (err) {
      console.warn('RAG addDocument error:', err);
      return 0;
    }
  }

  getDocumentCount() {
    return store.get('rag.documentCount') || 0;
  }
}

export const ragEngine = new RAGEngine();
