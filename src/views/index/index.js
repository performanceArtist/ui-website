import '../../styles.js';
import './index.scss';

import '../../static/videos/review.mp4';

import {ripple, video, myMap} from '../../scripts';

window.onload = function() {
    ripple();
    video();
    myMap('location');
}

