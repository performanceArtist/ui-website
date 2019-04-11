import "./fonts/comic/fonts.css";
import 'font-awesome/scss/font-awesome.scss';
import './plugins/jquery-switcher/css/switcher.css';
import './main.scss';

//const test = require('./scripts/test');

require('./components/progress/chart/chart');
require('./plugins/jquery-switcher/js/jquery.switcher.min');

const updateProgress = require('./components/progress/stage/stage');

window.onload = function() {
  require('./components/progress/slider/slider');
  require('./components/buttons/standard/ripple');

  $.switcher('.toggle-switch')

  $('.circle').circleProgress({
      value: 0.6,
      startAngle: -Math.PI/2,
      size: 120,
      fill: '#E75637'
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('.circle-text').text(stepValue.toFixed(2).substr(2));
    });

  $('.pie').circleProgress({
    value: 1,
    startAngle: -Math.PI/2,
    size: 120,
    thickness: '25',
    fill: {
        sectors: [
            ['#747474', 0.3], 
            ['#E75637', 0.5], 
            ['#4EB7A8', 0.8],
            ['#E6E6E6', 1.0]
        ]
    }
  });

  const p = document.querySelector('.progress');
  console.log(p);
  updateProgress(p);
  //updateProgress(p);

}


