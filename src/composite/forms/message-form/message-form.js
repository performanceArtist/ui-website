import validator from './validator.js';

function extract(cont) {
    return {
        bubble: cont.querySelector('.bubble'),
        input: cont.querySelector('input')
    }
}

function validate(el, vald) {
    el.input.addEventListener('input', function(e) {
        let valid = vald(el.input),
            newClass = valid ? 'okay-bubble' : 'error-bubble',
            newText = valid ? 'thanks' : 'error';
        
        el.bubble.innerHTML = newText;
        el.bubble.style.display = 'inline-block';
        el.bubble.className = `bubble left-bubble ${newClass}`;
    });
}

export default function(selector) {
    let form = document.querySelector(selector),
        name = extract(form.querySelector('.message-name')),
        email = extract(form.querySelector('.message-email'));

    validate(name, validator.name);
    validate(email, validator.email);
}
