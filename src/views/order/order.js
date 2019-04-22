import '../../styles.js';
import './order.scss';

import {} from '../../scripts';

window.onload = function() {
    $('#stages').progressbar({
        // ~: failed
        // @: current
        steps: ['@Choose a pizza', 'Select your ingredients', 'Enter your adress', 'Done!']
    });

    $.switcher('.toggle-switch');
}