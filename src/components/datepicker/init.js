import Datepicker from './datepicker';

document
  .querySelectorAll('.js-datepicker')
  .forEach(element => new Datepicker(element));
