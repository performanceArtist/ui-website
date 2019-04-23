function choose(regex) {
    return function(input, cb) {
        const valid = regex.test(input.value);
        if(cb instanceof Function) {
            cb(valid, input);
        } else {
            return valid;
        }
    }
}

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
        el.bubble.style.visibility = 'initial';
        el.bubble.className = newClass;
    });
}

const name = choose(/^[a-zA-Z0-9]+$/);
const email = choose(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const address = choose(/^[a-zA-Z0-9 ]{5,}$/);
const search = choose(/^kekek$/);

export default {name, email, address, search, extract, validate};