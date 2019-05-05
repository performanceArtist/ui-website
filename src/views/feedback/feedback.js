import './feedback.scss';

import { messageForm, slider, ripple } from '../../scripts';

window.onload = function init() {
  ripple();
  messageForm('.message-form');
  slider.slider1('.slider-1');
};
