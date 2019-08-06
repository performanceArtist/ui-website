import PieChart from './/pie-chart';

document
  .querySelectorAll('.pie-chart')
  .forEach(element => new PieChart(element));
