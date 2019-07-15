import '../../styles';

import * as scripts from '../../scripts';

window.onload = function init() {
  // automatically adds ripple to the elements with custom 'ripple' attribute
  scripts.ripple();

  // defaults
  scripts.chart('#chart-1', { value: 0 });
  scripts.chart('#chart-2', { value: 0.38 });
  scripts.chart('#chart-3', { value: 0.62 });
  scripts.chart('#chart-4', { value: 0.89 });
  scripts.pie('.pie');

  // override defaults
  // same principle applies to some other modules, such as 'slider'
  /*
    scripts.percent('.chart', {fill: 'red'});
    scripts.pie('.pie', {fill: {
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
  scripts.slider.withSteps('#steps-slider', { value: 75 });

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
