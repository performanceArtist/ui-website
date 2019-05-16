import 'font-awesome/scss/font-awesome.scss';

import 'jquery-ui-dist/jquery-ui.min.css';
import './plugins/jquery-switcher/css/switcher.css';
import './plugins/progressbar/jquery.progressbar.css';

import './layout.scss';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(
  require.context(
    './static',
    true,
    /\.(scss|jpg|png|css|svg|png|ico|xml|mp4|)$/
  )
);
importAll(require.context('./components', true, /\.scss$/));
importAll(require.context('./composite', true, /\.scss$/));
