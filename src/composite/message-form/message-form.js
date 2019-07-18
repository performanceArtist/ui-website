class MessageForm {
  constructor(element) {
    this.element = element;

    this.name = {
      regex: /^[a-zA-Z0-9]+$/,
      input: element.querySelector('.message-form__name input'),
      bubble: element.querySelector('.message-form__name .message-form__bubble')
    };
    this.name.input.addEventListener('input', () => this.validate(this.name));

    this.email = {
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      input: element.querySelector('.message-form__email input'),
      bubble: element.querySelector(
        '.message-form__email .message-form__bubble'
      )
    };

    this.email.input.addEventListener('input', () => this.validate(this.email));
  }

  validate(current) {
    console.log(current);
    const valid = current.regex.test(current.input.value);
    const newClass = valid ? 'bubble_okay' : 'bubble_error';
    const newText = valid ? 'thanks' : 'error';

    current.bubble.innerHTML = newText;
    current.bubble.style.visibility = 'initial';
    current.bubble.className = `bubble bubble_left ${newClass}`;
  }
}

document
  .querySelectorAll('.message-form')
  .forEach(element => new MessageForm(element));
