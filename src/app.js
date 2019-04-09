import "./fonts/comic/fonts.css";
import './main.scss';
import './plugins/circlelize/css/jCirclize.min.css';

import './components/buttons/standard/ripple.js';

const test = require('./scripts/test');

//JQuery plugins
require('./plugins/circlelize/dist/jquery.jCirclize.min');

window.onload = function() {
    require('./components/progress/slider/slider');

    $('#jtest').circlize({
        radius: 50,
        perc: 60,
        usePercentage: true,
        background: "#DA4453",
        //foreground: "#434A53",
        stroke: 15,
    });

    test();
}


