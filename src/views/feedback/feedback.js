import '../../styles.js';
import './feedback.scss';

import {messageForm, slider} from '../../scripts';

window.onload = function() {
    messageForm('.message-form');
    slider.slider1('.slider-1');
}