class Order {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);

    this.init();
  }

  init() {
    this.steps = this.root.querySelectorAll('.stage ul li');
    this.dropdown = this.root.querySelector('.dropdown select');
    this.options = this.root.querySelector('.order__options');
    this.address = this.root.querySelector('.order__address input');
    this.submit = this.root.querySelector('.order__submit');

    this.dropdown.addEventListener('change', () => {
      this.steps[0].setAttribute('class', 'done');
      this.steps[1].setAttribute('class', 'current');
      this.options.style.visibility = 'initial';
    });

    this.options.addEventListener('change', () => {
      this.steps[1].setAttribute('class', 'done');
      this.steps[2].setAttribute('class', 'current');
      this.address.style.visibility = 'initial';
    });

    this.address.addEventListener('input', event => {
      const isValid = /^[a-zA-Z0-9 ]{5,}$/.test(event.target.value);

      if (isValid) {
        this.steps[2].setAttribute('class', 'done');
        this.steps[3].setAttribute('class', 'done');
        this.submit.style.visibility = 'initial';
      }
    });
  }
}

document.querySelectorAll('.order').forEach(element => new Order(element));
