import makeChart from '../../components/chart/chart';
import makePieChart from '../../components/pie-chart/pie-chart';

const Factory = (function Factory() {
  function Ingredient(name, color, value) {
    this.name = name;
    this.color = color;
    this.value = value;

    const li = document.createElement('li');
    li.innerText = this.name;
    this.element = li;
  }

  return function choose(type, val) {
    switch (type) {
      case 'Tomatoes':
        return new Ingredient('Tomatoes', '#DF3232', val);
      case 'Mozarella':
        return new Ingredient('Mozarella', '#EDED86', val);
      case 'Pepperoni':
        return new Ingredient('Pepperoni', 'brown', val);
      case 'Onions':
        return new Ingredient('Onions', '#B96C93', val);
      case 'GreenStuff':
        return new Ingredient('Green Stuff', '#28590c', val);
      default:
        throw new Error('No ingredient!');
    }
  };
})();

class Pizza {
  constructor(element, items) {
    this.items = items.map(item => {
      const ingredients = item.ingredients.map(([ingredient, value]) =>
        Factory(ingredient, value)
      );
      return {
        ...item,
        ingredients
      };
    });
    this.element = element;
    this.name = element.querySelector('.pizza__name');
    this.image = element.querySelector('.pizza__image');
    this.pieChart = element.querySelector('.pie-chart');
    this.chart = element.querySelector('.chart');
    this.leftArrow = element.querySelector('.arrow-button_left');
    this.rightArrow = element.querySelector('.arrow-button_right');
    this.list = element.querySelector('.pizza__list');
    this.index = 0;

    this.display = this.display.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.leftArrow.addEventListener('click', () => {
      this.previous();
    });

    this.rightArrow.addEventListener('click', () => {
      this.next();
    });

    this.display();
  }

  display() {
    const { name, image, rating, ingredients } = this.items[this.index];

    this.name.innerText = name;
    this.image.src = image;

    const list = document.createElement('ul');

    ingredients.forEach(ingredient => {
      list.appendChild(ingredient.element);
    });

    this.list.innerHTML = '';
    this.list.appendChild(list);

    makeChart(this.chart, {
      value: rating,
      fill: rating > 0.6 ? '#68BB68' : '#D28847'
    });

    makePieChart(this.pieChart, {
      fill: {
        sectors: ingredients.map(ingredient => [
          ingredient.color,
          ingredient.value
        ])
      }
    });
  }

  next() {
    if (this.index >= this.items.length - 1) return;

    this.index = this.index + 1;

    if (this.index === this.items.length - 1) {
      this.rightArrow.classList.add('arrow-button_disabled');
    } else {
      this.leftArrow.classList.remove('arrow-button_disabled');
    }

    this.display();
  }

  previous() {
    if (this.index <= 0) return;

    this.index = this.index - 1;

    if (this.index === 0) {
      this.leftArrow.classList.add('arrow-button_disabled');
    } else {
      this.rightArrow.classList.remove('arrow-button_disabled');
    }

    this.display();
  }
}

document.querySelectorAll('.pizza').forEach(element => {
  const items = JSON.parse(element.dataset.items);
  new Pizza(element, items);
});
