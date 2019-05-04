import validator from './validator';

export default function(selector) {
  const form = document.querySelector(selector);
  const name = validator.extract(form.querySelector('.message-form__name'));
  const email = validator.extract(form.querySelector('.message-form__email'));

  validator.validate(name, validator.name);
  validator.validate(email, validator.email);
}
