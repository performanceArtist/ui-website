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

    const perc = (target.value - target.min) / (target.max - target.min);
    const newPosition = this.width * perc - target.value * this.offset;

    this.bubble.innerHTML = target.value;
    this.bubble.style.left = `${newPosition - 5}px`;
  }
}

document.querySelectorAll('.slider').forEach(element => new Slider(element));

class WithSteps {
  constructor(root) {
    this.$root = $(root);
    this.data = this.$root.data();
    this.$root.slider(this.data);

    this.addSteps = this.addSteps.bind(this);

    this.addSteps();
  }

  addSteps() {
    const { max, min, step } = this.data;
    const length = max - min;

    for (let i = 0; i <= length; i += step) {
      const label = $(`<label>${i + min}</label>`).css(
        'left',
        `${(i / length) * 100}%`
      );
      this.$root.append(label);
    }
  }
}

document
  .querySelectorAll('.steps-slider')
  .forEach(element => new WithSteps(element));
