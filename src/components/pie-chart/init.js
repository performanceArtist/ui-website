import PieChart from './pie-chart';

document
  .querySelectorAll('.js-pie-chart')
  .forEach(element => new PieChart(element));
