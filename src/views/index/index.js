import '../../styles.js';
import './index.scss';

import '../../static/videos/review.mp4';

import {ripple, video, myMap, datepicker} from '../../scripts';

window.onload = function() {
    ripple();
    video();
    myMap('location');
    datepicker('.calendar');
}

