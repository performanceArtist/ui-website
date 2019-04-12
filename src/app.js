import "./fonts/comic/fonts.css";
import 'font-awesome/scss/font-awesome.scss';
import './plugins/jquery-switcher/css/switcher.css';
import 'jquery-ui-dist/jquery-ui.min.css';
import './plugins/progressbar/jquery.progressbar.css';
import './main.scss';

require('jquery-ui-dist/jquery-ui');
require('./components/progress/chart/chart');
require('./plugins/jquery-switcher/js/jquery.switcher.min');
require('./plugins/progressbar/jquery.progressbar');
require('./components/map/map');

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

  $( ".slider-2" ).slider({
    value: 50,
    min: 0,
    max: 100,
    step: 25,
    orientation: "horizontal",
    range: "min",
    animate: true
  }).each(function() {
    var opt = $(this).data().uiSlider.options;
    
    // Get the number of possible values
    var vals = opt.max - opt.min;
    
    // Space out values
    for (var i = 0; i <= vals; i += opt.step) {
      
      var el = $('<label>'+i+'</label>').css('left',(i/vals*100)+'%');
    
      $( ".slider-2" ).append(el);
      
    }
  });

  $('#stage-test').progressbar({
    // ~: failed
    // @: current
    steps: ['Step 1', 'Step 2', '@Step 3 (Current)', 'Step 4', 'Step 5']
  });

  $('.calendar').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    dayNamesMin: ['sat', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    minDate: null,
    maxDate: null
  }
  );
}


