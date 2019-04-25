//add JQuery dependencies
import 'jquery-ui-dist/jquery-ui';
import './plugins/jquery-switcher/js/jquery.switcher.min';
import './plugins/progressbar/jquery.progressbar';

import ripple from './components/buttons/standard-button/ripple';
import * as chart from './components/progress/chart/chart';
import * as slider from './components/progress/slider/slider';
import video from './components/video/video';
import datepicker from './components/datepicker/datepicker';
import myMap from './components/map/map';
import messageForm from './composite/forms/message-form/message-form';

import './static/images/logo.png';

import search from './composite/search/search';
search();

export {
    ripple,
    chart,
    slider,
    video,
    messageForm,
    datepicker,
    myMap
}