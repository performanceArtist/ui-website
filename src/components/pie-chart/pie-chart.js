import './multicolor';

class PieChart {
  constructor(root, options = {}) {
    this.$root = $(root);
    this.options = options;

    this.init = this.init.bind(this);

    this.init();
  }

  init() {
    this.data = this.$root.data();
    this.$root.circleProgress({ ...this.data, ...this.options });
  }
}

export default PieChart;
