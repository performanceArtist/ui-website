class Chart {
  constructor(root, options = {}) {
    this.$root = $(root);
    this.options = options;

    this.init = this.init.bind(this);
    this.handleAnimationProgress = this.handleAnimationProgress.bind(this);

    this.init();
  }

  init() {
    this.data = this.$root.data();
    this.$value = this.$root.find('.js-chart__text');
    this.$root
      .circleProgress({ ...this.data, ...this.options })
      .on('circle-animation-progress', this.handleAnimationProgress);
  }

  handleAnimationProgress(event, progress, stepValue) {
    const value = parseInt(stepValue.toFixed(2).slice(2), 10);
    this.$value.text(value);
  }
}

export default Chart;
