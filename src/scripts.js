//add dependencies
(function() {
    require('jquery-ui-dist/jquery-ui');
    require('./plugins/jquery-switcher/js/jquery.switcher.min');
    require('./plugins/progressbar/jquery.progressbar');
})();

//export wrappers
module.exports = {
    ripple: require('./components/buttons/standard/ripple'),
    chart: require('./components/progress/chart/chart'),
    slider: require('./components/progress/slider/slider'),
    video: require('./components/video/video'),
    messageForm: require('./composite/forms/message-form/message-form'),
    datepicker: require('./composite/datepicker/datepicker'),
    map: require('./components/map/map')
}