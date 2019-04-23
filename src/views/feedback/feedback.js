import '../../styles.js';
import './feedback.scss';

import {messageForm, slider, ripple} from '../../scripts';

window.onload = function() {
    ripple();
    messageForm('.message-form');
    slider.slider1('.slider-1');
}