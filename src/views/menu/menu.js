import '../../styles.js';
import './menu.scss';

import '../../composite/pizza/pizza.scss';

import '../../static/images/pepperoni.jpg';
import '../../static/images/cheesy_crust.jpg';

import {chart} from '../../scripts';

const colors = {

}

window.onload = function() {
    chart.percent('.circle');
    chart.pie('.pie', {fill: {
        sectors: [
            ['red', 0.3], 
            ['blue', 0.5], 
            ['black', 0.8],
            ['white', 1.0]
        ]}
    });

    $('#stages').progressbar({
        // ~: failed
        // @: current
        steps: ['@Step 1', 'Step 2', 'Step 3', 'Step 4']
    });
}