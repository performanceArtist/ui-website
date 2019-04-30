import '../../styles';
import './gallery.scss';

import '../../composite/pizza/pizza.scss';
import pizza from '../../composite/pizza/pizza';

window.onload = function init() {
  pizza.current();

  document.querySelector('.arrow-button_right').addEventListener('click', (e) => {
    pizza.next();
  });

  document.querySelector('.arrow-button_left').addEventListener('click', (e) => {
    pizza.previous();
  });
};
