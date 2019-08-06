class MessageForm {
  constructor(root) {
    this.root = root;

    this.init = this.init.bind(this);

    this.init();
  }

  init() {
    const nameBubble = document.createElement('div');
    this.root
      .querySelector('.message-form__name .message-form__bubble')
      .appendChild(nameBubble);

    this.name = {
      regex: /^[a-zA-Z0-9]+$/,
      input: this.root.querySelector('.message-form__name input'),
      bubble: nameBubble
    };

    const emailBubble = document.createElement('div');
    this.root
      .querySelector('.message-form__email .message-form__bubble')
      .appendChild(emailBubble);

    this.email = {
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      input: this.root.querySelector('.message-form__email input'),
      bubble: emailBubble
    };

    this.name.input.addEventListener('input', () => this.validate(this.name));
    this.email.input.addEventListener('input', () => this.validate(this.email));
  }

  validate(field) {
    const valid = field.regex.test(field.input.value);
    const newClass = valid ? 'bubble_valid' : 'bubble_invalid';
    const newText = valid ? 'thanks' : 'error';

    field.bubble.innerHTML = newText;
    field.bubble.style.visibility = 'initial';
    field.bubble.className = `bubble bubble_left ${newClass}`;
  }
}

export default MessageForm;
