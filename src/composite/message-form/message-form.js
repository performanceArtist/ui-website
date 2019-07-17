import validator from './validator';

(function validate(selector) {
  const form = document.querySelector(selector);
  if (!form) return;

  const name = validator.extract(form.querySelector('.message-form__name'));
  const email = validator.extract(form.querySelector('.message-form__email'));

  validator.validate(name, validator.name);
  validator.validate(email, validator.email);
})('.message-form');
