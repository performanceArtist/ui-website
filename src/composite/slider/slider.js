class Slider {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.init();
  }

  init() {
    this.input = this.root.querySelector('input');
    this.bubble = this.root.querySelector('.bubble');
    this.width = this.root.offsetWidth;
    this.offset = 0.25;
    this.input.addEventListener('input', this.handleInput);
    this.input.dispatchEvent(new Event('input'));
  }

  handleInput(event) {
    const { target } = event;

    const relativeValue =
      (target.value - target.min) / (target.max - target.min);
    const newPosition = this.width * relativeValue - target.value * this.offset;

    this.bubble.innerHTML = target.value;
    this.bubble.style.left = `${newPosition - 5}px`;
  }
}

export default Slider;
