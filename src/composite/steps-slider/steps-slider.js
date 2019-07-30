class StepsSlider {
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
  .forEach(element => new StepsSlider(element));
