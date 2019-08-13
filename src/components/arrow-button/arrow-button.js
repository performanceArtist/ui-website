class ArrowButton {
  constructor(root) {
    this.root = root;
  }

  disable() {
    this.root.classList.add('arrow-button_disabled');
  }

  activate() {
    this.root.classList.remove('arrow-button_disabled');
  }

  onClick(callback) {
    this.root.addEventListener('click', callback);
  }
}

export default ArrowButton;
