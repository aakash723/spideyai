import { EngineBase } from './core.js';

const DEFAULT_USER = 'default';
let _currentUser = DEFAULT_USER;
let _store = {};
let _subscribers = {};

function storageKey(user) {
  return `spidey_ai_${user}`;
}

function persist() {
  try {
    localStorage.setItem(storageKey(_currentUser), JSON.stringify(_store));
  } catch (e) {
    console.warn('DataStore persist failed:', e);
  }
}

function load(user) {
  try {
    const raw = localStorage.getItem(storageKey(user));
    _store = raw ? JSON.parse(raw) : {};
  } catch (e) {
    _store = {};
  }
}

export class DataStore extends EngineBase {
  constructor() {
    super('DataStore');
    load(_currentUser);
  }

  get(path) {
    const parts = path.split('.');
    let val = _store;
    for (const p of parts) {
      if (val == null || typeof val !== 'object') return undefined;
      val = val[p];
    }
    return val;
  }

  set(path, value) {
    const parts = path.split('.');
    let obj = _store;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!obj[parts[i]] || typeof obj[parts[i]] !== 'object') obj[parts[i]] = {};
      obj = obj[parts[i]];
    }
    obj[parts[parts.length - 1]] = value;
    persist();
    this._notify(path, value);
    return this;
  }

  push(path, value) {
    const arr = this.get(path) || [];
    arr.push(value);
    this.set(path, arr);
    return this;
  }

  subscribe(path, handler) {
    if (!_subscribers[path]) _subscribers[path] = [];
    _subscribers[path].push(handler);
    return this;
  }

  _notify(path, value) {
    for (const [key, handlers] of Object.entries(_subscribers)) {
      if (path.startsWith(key) || key === '*') {
        handlers.forEach(fn => fn(path, value, _store));
      }
    }
    this.emit('changed', { path, value, store: _store });
  }

  resetUser(user) {
    const u = user || _currentUser;
    try { localStorage.removeItem(storageKey(u)); } catch (e) { /* ignore */ }
    if (u === _currentUser) {
      _store = {};
      this._notify('*', _store);
    }
    return this;
  }

  getUser() { return _currentUser; }

  switchUser(user) {
    _currentUser = user;
    load(user);
    this._notify('*', _store);
    return this;
  }

  getAllUsers() {
    const users = ['default'];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('spidey_ai_')) {
          users.push(k.replace('spidey_ai_', ''));
        }
      }
    } catch (e) { /* ignore */ }
    return [...new Set(users)];
  }

  exportUserData(user) {
    try {
      const raw = localStorage.getItem(storageKey(user || _currentUser));
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  importUserData(user, data) {
    try {
      localStorage.setItem(storageKey(user || _currentUser), JSON.stringify(data));
      if ((user || _currentUser) === _currentUser) {
        load(_currentUser);
        this._notify('*', _store);
      }
    } catch (e) {
      console.warn('DataStore import failed:', e);
    }
    return this;
  }
}

export const store = new DataStore();
