import Observable from '../../utils/observable';

class Dropdown extends Observable {
  constructor(root) {
    super();

    this.root = root;

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.init();
  }

  init() {
    this.root.querySelector('select').addEventListener('change', event => {
      this.notify('change', event.target.value);
    });
  }

  show() {
    this.root.style.visibility = 'initial';
  }

  hide() {
    this.root.style.visibility = 'hidden';
  }
}

export default Dropdown;
