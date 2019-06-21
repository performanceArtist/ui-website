const choose = regex => {
  return function isValid(input, callback) {
    const valid = regex.test(input.value);
    if (callback instanceof Function) {
      callback(valid, input);
    } else {
      return valid;
    }
  };
};

function extract(container) {
  return {
    bubble: container.querySelector('.message-form__bubble'),
    input: container.querySelector('input')
  };
}

function validate(element, isValid) {
  element.input.addEventListener('input', () => {
    const valid = isValid(element.input);
    const newClass = valid ? 'bubble_okay' : 'bubble_error';
    const newText = valid ? 'thanks' : 'error';

    element.bubble.innerHTML = newText;
    element.bubble.style.visibility = 'initial';
    element.bubble.className = `bubble bubble_left ${newClass}`;
  });
}

const name = choose(/^[a-zA-Z0-9]+$/);
const email = choose(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const address = choose(/^[a-zA-Z0-9 ]{5,}$/);
const search = choose(/^kekek$/);

export default {
  name,
  email,
  address,
  search,
  extract,
  validate
};
