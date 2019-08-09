import Button from './button';

document
  .querySelectorAll('.js-button_with-ripple')
  .forEach(element => new Button(element));
