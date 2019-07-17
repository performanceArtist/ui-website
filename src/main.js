import 'font-awesome/scss/font-awesome.scss';
import 'jquery-ui-dist/jquery-ui.min.css';

import 'jquery-ui-dist/jquery-ui';
import 'jquery-circle-progress';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(
  require.context('./', true, /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|)$/)
);

importAll(require.context('./components', true, /\.(js)$/));
importAll(require.context('./composite', true, /\.(js)$/));
