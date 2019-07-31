class Chart {
  constructor(root, options = {}) {
    this.$root = $(root);
    this.options = options;

    this.init = this.init.bind(this);

    this.init();
  }

  init() {
    this.data = this.$root.data();
    this.$value = this.$root.find('.chart__text');
    this.$root
      .circleProgress({ ...this.data, ...this.options })
      .on('circle-animation-progress', (event, progress, stepValue) => {
        const value = parseInt(stepValue.toFixed(2).slice(2), 10);
        this.$value.text(value);
      });
  }
}

document.querySelectorAll('.chart').forEach(element => new Chart(element));

export default Chart;
