import '../../styles.js';
import './gallery.scss';

import '../../composite/pizza/pizza.scss';
import pizza from '../../composite/pizza/pizza';

window.onload = function() {
    pizza.current();

    document.querySelector('.arrow-button_right').addEventListener('click', function(e) {
        pizza.next();
    });

    document.querySelector('.arrow-button_left').addEventListener('click', function(e) {
        pizza.previous();
    });
}