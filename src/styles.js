import 'font-awesome/scss/font-awesome.scss';

import 'jquery-ui-dist/jquery-ui.min.css';
import './plugins/jquery-switcher/css/switcher.css';
import './plugins/progressbar/jquery.progressbar.css';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('./', true, /\.(jpg|png|svg|png|ico|xml|mp4|)$/));
importAll(require.context('./', true, /\.(css|scss)$/));
