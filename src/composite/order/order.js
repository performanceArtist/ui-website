class Order {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);
    this.takeStep = this.takeStep.bind(this);

    this.init();
  }

  init() {
    const selectors = [
      '.dropdown select',
      '.order__options',
      '.order__address input',
      '.order__submit'
    ];
    const steps = this.root.querySelectorAll('.stage ul li');

    this.steps = selectors.map((selector, index) => ({
      element: this.root.querySelector(selector),
      step: steps[index]
    }));
    this.steps.forEach(({ element }) =>
      element.addEventListener('change', this.takeStep)
    );
    this.currentStepIndex = 0;
  }

  takeStep() {
    const current = this.steps[this.currentStepIndex];
    const next = this.steps[this.currentStepIndex + 1];

    if (!current) return;

    current.step.classList.remove('stage__li_current');
    current.step.classList.add('stage__li_done');
    current.element.removeEventListener('change', this.takeStep);

    if (next) {
      if (this.currentStepIndex + 2 === this.steps.length) {
        next.step.classList.add('stage__li_done');
      } else {
        next.step.classList.add('stage__li_current');
      }
      next.element.style.visibility = 'initial';
    }

    this.currentStepIndex += 1;
  }
}

document.querySelectorAll('.order').forEach(element => new Order(element));
