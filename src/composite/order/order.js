import Stage from '../../components/stage/stage';

class Order {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);
    this.takeStep = this.takeStep.bind(this);

    this.init();
  }

  init() {
    const selectors = [
      '.js-order__dropdown select',
      '.js-order__options',
      '.js-order__address input',
      '.js-order__submit'
    ];

    this.stage = new Stage(this.root.querySelector('.stage'));
    this.elements = selectors.map(selector => document.querySelector(selector));
    this.elements.forEach(element =>
      element.addEventListener('change', this.takeStep)
    );
    this.currentStepIndex = 0;
  }

  takeStep() {
    if (this.elements.length <= this.currentStepIndex) return;

    const nextElement = this.elements[this.currentStepIndex + 1];
    if (nextElement) nextElement.style.visibility = 'initial';

    this.stage.takeStep(this.currentStepIndex);
    this.currentStepIndex += 1;
  }
}

export default Order;
