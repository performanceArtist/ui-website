import Pizza from './pizza';

document.querySelectorAll('.pizza').forEach(element => {
  const items = JSON.parse(element.dataset.items);
  new Pizza(element, items);
});
