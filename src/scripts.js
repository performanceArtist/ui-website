// add JQuery dependencies
import 'jquery-ui-dist/jquery-ui';
import './components/progressbar/jquery.progressbar';

import ripple from './components/standard-button/ripple';
import chart from './components/chart/chart';
import pie from './components/pie/pie';
import * as slider from './composite/slider/slider';
import video from './components/video/video';
import datepicker from './components/datepicker/datepicker';
import myMap from './components/map/map';
import messageForm from './composite/message-form/message-form';
import search from './components/search/search';

search();

export { ripple, chart, pie, slider, video, messageForm, datepicker, myMap };
