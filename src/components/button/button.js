class Button {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);
    this.showRipple = this.showRipple.bind(this);
    this.cleanUp = this.cleanUp.bind(this);

    this.init();
  }

  static debounce(func, delay) {
    let inDebounce;
    return function newDebounce(...args) {
      const context = this;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
      return inDebounce;
    };
  }

  init() {
    this.rippleContainer = document.createElement('div');
    this.rippleContainer.className = 'button__ripple-container';
    this.root.addEventListener('mousedown', this.showRipple);
    this.root.addEventListener('mouseup', Button.debounce(this.cleanUp, 2000));
    this.root.rippleContainer = this.rippleContainer;
    this.root.appendChild(this.rippleContainer);
  }

  showRipple(event) {
    const target = event.currentTarget;
    const rippler = document.createElement('span');
    rippler.className = 'button__rippler';
    const size = target.offsetWidth;
    const { left, top } = target.getBoundingClientRect();
    const rippleLeft = event.pageX - left - size / 2;
    const rippleTop = event.pageY - top - size / 2 - window.scrollY;
    const style = `top: ${rippleTop}px; left: ${rippleLeft}px; height: ${size}px; width: ${size}px;`;
    target.rippleContainer.appendChild(rippler);
    rippler.setAttribute('style', style);
  }

  cleanUp() {
    while (this.rippleContainer.firstChild) {
      this.rippleContainer.removeChild(this.rippleContainer.firstChild);
    }
  }
}

export default Button;
