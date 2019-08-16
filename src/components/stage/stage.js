class Stage {
  constructor(root) {
    this.root = root;
    this.stepElements = [];

    this.init = this.init.bind(this);
    this.addStep = this.addStep.bind(this);

    this.init();
  }

  init() {
    this.steps = $(this.root).data().steps;
    if (!(this.steps instanceof Array)) return;

    this.ul = document.createElement('ul');
    this.ul.setAttribute('class', 'stage__progressbar');

    this.root.innerHTML = '';
    this.root.appendChild(this.ul);

    this.steps.forEach(this.addStep);
  }

  addStep(value) {
    const li = document.createElement('li');
    li.setAttribute('class', 'stage__li');

    li.style.width = `${100 / this.steps.length}%`;
    li.innerText = value.replace('@', '').replace('~', '');

    if (value[0] === '@') {
      li.classList.add('stage__li_current');
      this.ul.childNodes.forEach(element =>
        element.classList.add('class', 'stage__li_done')
      );
    }

    if (value[0] === '~') {
      li.classList.add('stage__li_failed');
    }

    this.stepElements.push(li);
    this.ul.appendChild(li);
  }

  takeStep(index) {
    const currentStep = this.stepElements[index];
    const nextStep = this.stepElements[index + 1];

    if (currentStep) {
      currentStep.classList.remove('stage__li_current');
      currentStep.classList.add('stage__li_done');
    }

    if (nextStep) {
      if (index + 2 === this.stepElements.length) {
        nextStep.classList.add('stage__li_done');
      } else {
        nextStep.classList.add('stage__li_current');
      }
    }
  }
}

export default Stage;
