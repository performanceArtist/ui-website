class Slider {
  constructor(element) {
    this.element = element;
    this.input = element.querySelector('input');
    this.bubble = element.querySelector('.bubble');
    this.width = element.offsetWidth;
    this.offset = 0.25;

    this.handleInput = this.handleInput.bind(this);
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
  constructor($element) {
    this.data = $element.data();
    this.$element = $element.slider(this.data);
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
      this.$element.append(label);
    }
  }
}

document
  .querySelectorAll('.steps-slider')
  .forEach(element => new WithSteps($(element)));
