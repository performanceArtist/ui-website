class Search {
  constructor(root) {
    this.root = root;
    this.input = this.root.querySelector('.js-search__input');

    this.init = this.init.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.init();
  }

  init() {
    this.input.addEventListener('input', this.handleInput);
    this.handleInput();
  }

  handleInput() {
    if (/^[a-zA-Z]*$/.test(this.input.value)) {
      this.input.classList.remove('search_invalid');
    } else {
      this.input.classList.add('search_invalid');
      this.input.value = 'Invalid';
    }
  }
}

export default Search;
