import "./fonts/comic/fonts.css";
import 'font-awesome/scss/font-awesome.scss';
import 'jquery-ui-dist/jquery-ui.min.css';
import './plugins/jquery-switcher/css/switcher.css';
import './plugins/progressbar/jquery.progressbar.css';
import './main.scss';

require('jquery-ui-dist/jquery-ui');
require('./plugins/jquery-switcher/js/jquery.switcher.min');
require('./plugins/progressbar/jquery.progressbar');

const chart = require('./components/progress/chart/chart');
const slider = require('./components/progress/slider/slider');
const video = require('./components/video/video');
const messageForm = require('./composite/forms/message-form/message-form');
const datepicker = require('./composite/datepicker/datepicker');
//const map = require('./components/map/map');

window.onload = function() {
    //adds ripple to elements with custom 'ripple' attribute
    require('./components/buttons/standard/ripple');

    //defaults
    chart.percent('.circle');
    chart.pie('.pie');

    //override defaults
    //same principle applies to some other modules, such as 'slider'
    /*
    chart.percent('.circle', {fill: 'red'});
    chart.pie('.pie', {fill: {
        sectors: [
            ['red', 0.3], 
            ['blue', 0.5], 
            ['black', 0.8],
            ['white', 1.0]
            ]
        }
    });
    */

    slider.slider1('.slider-1');
    slider.slider2('.slider-2');

    $.switcher('.toggle-switch');

    messageForm.addValidator('.message-form');

    datepicker('.calendar');
    
    $('#stage-test').progressbar({
        // ~: failed
        // @: current
        steps: ['Step 1', 'Step 2', '@Step 3 (Current)', 'Step 4', 'Step 5']
    });

    video('#video');
}


