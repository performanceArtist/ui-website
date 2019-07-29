function debounce(func, delay) {
  let inDebounce;
  return function newDebounce(...args) {
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
    return inDebounce;
  };
}

class Ripple {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);
    this.showRipple = this.showRipple.bind(this);
    this.cleanUp = this.cleanUp.bind(this);

    this.init();
  }

  init() {
    this.rippleContainer = document.createElement('div');
    this.rippleContainer.className = 'button__ripple-container';
    this.root.addEventListener('mousedown', this.showRipple);
    this.root.addEventListener('mouseup', debounce(this.cleanUp, 2000));
    this.root.rippleContainer = this.rippleContainer;
    this.root.appendChild(this.rippleContainer);
  }

  showRipple(event) {
    const target = event.currentTarget;
    const rippler = document.createElement('span');
    rippler.className = 'button__rippler';
    const size = target.offsetWidth;
    const pos = target.getBoundingClientRect();
    const x = event.pageX - pos.left - size / 2;
    const y = event.pageY - pos.top - size / 2 - window.scrollY;
    const style = `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;
    target.rippleContainer.appendChild(rippler);
    rippler.setAttribute('style', style);
  }

  cleanUp() {
    while (this.rippleContainer.firstChild) {
      this.rippleContainer.removeChild(this.rippleContainer.firstChild);
    }
  }
}

document
  .querySelectorAll('.button_ripple')
  .forEach(element => new Ripple(element));
