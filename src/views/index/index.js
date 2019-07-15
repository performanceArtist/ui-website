import { ripple, video, myMap, datepicker } from '../../scripts';

window.onload = function init() {
  ripple();
  video();
  myMap('location');
  datepicker('.calendar');
};
