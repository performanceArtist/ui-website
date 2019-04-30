import '../../styles';
import './order.scss';

import {} from '../../scripts';

import validator from '../../composite/message-form/validator';

window.onload = function init() {
  const hm = $('#stages').progressbar({
    steps: ['@Choose a pizza', 'Select options', 'Enter your address', 'All done!'],
  });
  const steps = hm.find('ul li');

  document.querySelector('.dropdown select').addEventListener('change', () => {
    steps[0].setAttribute('class', 'done');
    steps[1].setAttribute('class', 'current');
    document.querySelector('#order-options').style.visibility = 'initial';
  });

  document.querySelector('#crust').addEventListener('change', () => {
    steps[1].setAttribute('class', 'done');
    steps[2].setAttribute('class', 'current');
    document.querySelector('#address').style.visibility = 'initial';
  });

  const el = validator.extract(document.querySelector('#address'));

  el.input.addEventListener('input', () => {
    validator.validate(el, validator.address);

    if (validator.address(el.input)) {
      steps[2].setAttribute('class', 'done');
      steps[3].setAttribute('class', 'done');
      document.querySelector('#submit').style.visibility = 'initial';
    } else {
      steps[2].setAttribute('class', 'current');
      steps[3].setAttribute('class', '');
      document.querySelector('#submit').style.visibility = 'hidden';
    }
  });

  $.switcher('.toggle-switch');
};
