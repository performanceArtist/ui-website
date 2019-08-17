class Observable {
  constructor() {
    this._observers = {};

    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.notify = this.notify.bind(this);
  }

  subscribe(callback, type) {
    if (this._observers[type] instanceof Array) {
      this._observers[type].push(callback);
    } else {
      this._observers[type] = [callback];
    }
  }

  unsubscribe(callback, type) {
    this._observers[type] = this._observers[type].filter(
      observer => observer !== callback
    );
  }

  notify(type, data) {
    if (!this._observers[type]) return;
    this._observers[type].forEach(observer => observer(data));
  }
}

export default Observable;
