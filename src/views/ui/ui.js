import '../../styles';

import './ui.scss';

import 'static/images/ricardo.jpg';
import 'static/images/animal.jpg';
import 'static/images/bear.jpg';
import 'static/images/orang.jpg';

import 'static/videos/bunny.mp4';

import * as scripts from '../../scripts';

window.onload = function init() {
  // automatically adds ripple to the elements with custom 'ripple' attribute
  scripts.ripple();

  // defaults
  scripts.chart.percent('.circle');
  scripts.chart.pie('.pie');

  // override defaults
  // same principle applies to some other modules, such as 'slider'
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

  scripts.slider.slider1('.slider-1');
  scripts.slider.slider2('.slider-2');

  $.switcher('.toggle-switch');

  scripts.messageForm('.message-form');

  scripts.datepicker('.calendar');

  $('#stage-test').progressbar({
    // ~: failed
    // @: current
    steps: ['Step 1', 'Step 2', '@Step 3 (Current)', 'Step 4', 'Step 5']
  });

  scripts.myMap('map');

  scripts.video();
};
