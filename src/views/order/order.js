import '../../styles';

import '../../composite/pizza/pizza.scss';
import './order.scss';

// progressbar JQuery dependency
import {} from '../../scripts';
import validator from '../../composite/message-form/validator';

window.onload = function init() {
  const progressbar = $('#stages').progressbar({
    steps: [
      '@Choose a pizza',
      'Select options',
      'Enter your address',
      'All done!'
    ]
  });
  const steps = progressbar.find('ul li');

  document.querySelector('.dropdown select').addEventListener('change', () => {
    steps[0].setAttribute('class', 'done');
    steps[1].setAttribute('class', 'current');
    document.querySelector('.order__options').style.visibility = 'initial';
  });

  document.querySelector('.order__crust').addEventListener('change', () => {
    steps[1].setAttribute('class', 'done');
    steps[2].setAttribute('class', 'current');
    document.querySelector('.order__address').style.visibility = 'initial';
  });

  const el = validator.extract(document.querySelector('.order__address'));

  el.input.addEventListener('input', () => {
    validator.validate(el, validator.address);

    if (validator.address(el.input)) {
      steps[2].setAttribute('class', 'done');
      steps[3].setAttribute('class', 'done');
      document.querySelector('.order__submit').style.visibility = 'initial';
    } else {
      steps[2].setAttribute('class', 'current');
      steps[3].setAttribute('class', '');
      document.querySelector('.order__submit').style.visibility = 'hidden';
    }
  });

  $.switcher('.toggle-switch');
};
