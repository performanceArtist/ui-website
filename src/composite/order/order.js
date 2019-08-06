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
    const currentStep = this.steps[this.currentStepIndex];
    const nextStep = this.steps[this.currentStepIndex + 1];

    if (!currentStep) return;

    currentStep.step.classList.remove('stage__li_current');
    currentStep.step.classList.add('stage__li_done');
    currentStep.element.removeEventListener('change', this.takeStep);

    if (nextStep) {
      if (this.currentStepIndex + 2 === this.steps.length) {
        nextStep.step.classList.add('stage__li_done');
      } else {
        nextStep.step.classList.add('stage__li_current');
      }
      nextStep.element.style.visibility = 'initial';
    }

    this.currentStepIndex += 1;
  }
}

document.querySelectorAll('.order').forEach(element => new Order(element));
