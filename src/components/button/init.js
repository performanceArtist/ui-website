import Button from './button';

document
  .querySelectorAll('.button_with-ripple')
  .forEach(element => new Button(element));
