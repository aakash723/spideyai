export class EngineBase {
  constructor(name) {
    this.name = name;
    this._handlers = {};
  }
  on(event, handler) {
    (this._handlers[event] = this._handlers[event] || []).push(handler);
    return this;
  }
  emit(event, data) {
    const list = this._handlers[event];
    if (list) list.forEach(fn => fn(data, this));
    return this;
  }
  off(event, handler) {
    const list = this._handlers[event];
    if (list) this._handlers[event] = list.filter(fn => fn !== handler);
    return this;
  }
}
