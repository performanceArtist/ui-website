import './multicolor';

class PieChart {
  constructor(root, options = {}) {
    this.$root = $(root);
    this.data = this.$root.data();
    this.options = options;

    this.init = this.init.bind(this);

    this.init();
  }

  init() {
    this.$root.circleProgress({ ...this.data, ...this.options });
  }
}

document
  .querySelectorAll('.pie-chart')
  .forEach(element => new PieChart(element));

export default PieChart;
