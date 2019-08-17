import Stage from '../../components/stage/stage';
import Dropdown from '../../components/dropdown/dropdown';

class Order {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);
    this.takeStep = this.takeStep.bind(this);

    this.init();
  }

  init() {
    const dropdown = new Dropdown(
      this.root.querySelector('.js-order__dropdown')
    );
    const elements = [
      '.js-order__options',
      '.js-order__address input',
      '.js-order__submit'
    ].map(selector => document.querySelector(selector));

    dropdown.subscribe(this.takeStep, 'change');
    elements.forEach(element =>
      element.addEventListener('change', this.takeStep)
    );

    this.elements = [dropdown, ...elements];
    this.stage = new Stage(this.root.querySelector('.stage'));
    this.currentStepIndex = 0;
  }

  takeStep() {
    if (this.elements.length <= this.currentStepIndex) return;

    const nextElement = this.elements[this.currentStepIndex + 1];
    if (nextElement) {
      nextElement.style.visibility = 'initial';
    }

    this.stage.takeStep(this.currentStepIndex);
    this.currentStepIndex += 1;
  }
}

export default Order;
