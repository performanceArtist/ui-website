import Datepicker from './datepicker';

document
  .querySelectorAll('.datepicker')
  .forEach(element => new Datepicker(element));
