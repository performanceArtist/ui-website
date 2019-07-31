class StepsSlider {
  constructor(root) {
    this.$root = $(root);

    this.init = this.init.bind(this);
    this.addSteps = this.addSteps.bind(this);

    this.init();
    this.addSteps();
  }

  init() {
    this.data = this.$root.data();
    this.$root.slider(this.data);
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
  .querySelectorAll('.steps-slider__slider')
  .forEach(element => new StepsSlider(element));
