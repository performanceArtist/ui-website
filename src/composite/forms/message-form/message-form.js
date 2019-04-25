import validator from './validator.js';

export default function(selector) {
    let form = document.querySelector(selector),
        name = validator.extract(form.querySelector('.message-form__name')),
        email = validator.extract(form.querySelector('.message-form__email'));

    validator.validate(name, validator.name);
    validator.validate(email, validator.email);
}
