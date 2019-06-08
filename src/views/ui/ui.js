import '../../styles';

import './ui.scss';

import * as scripts from '../../scripts';

window.onload = function init() {
  // automatically adds ripple to the elements with custom 'ripple' attribute
  scripts.ripple();

  // defaults
  scripts.chart.percent('.chart');
  scripts.chart.pie('.pie');

  // override defaults
  // same principle applies to some other modules, such as 'slider'
  /*
    chart.percent('.chart', {fill: 'red'});
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

  scripts.slider.standard('#slider');
  scripts.slider.withSteps('#steps-slider');

  $.switcher('.toggle-switch');

  scripts.messageForm('.message-form');

  scripts.datepicker('.calendar');

  $('.stage').progressbar({
    // ~: failed
    // @: current
    steps: ['Step 1', 'Step 2', '@Step 3 (Current)', 'Step 4', 'Step 5']
  });

  scripts.myMap('map');

  scripts.video();
};
