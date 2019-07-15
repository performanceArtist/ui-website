import { messageForm, slider, ripple } from '../../scripts';

window.onload = function init() {
  ripple();
  messageForm('.message-form');
  slider.standard('#rating');
};
