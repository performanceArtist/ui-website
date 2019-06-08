import 'font-awesome/scss/font-awesome.scss';
import 'jquery-ui-dist/jquery-ui.min.css';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(
  require.context('./', true, /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|)$/)
);
