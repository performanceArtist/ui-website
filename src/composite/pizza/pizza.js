import Chart from '../../components/chart/chart';
import PieChart from '../../components/pie-chart/pie-chart';
import ArrowButton from '../../components/arrow-button/arrow-button';

import makeIngredient from './ingredients';
 
class Pizza {
  constructor(root, items) {
    this.root = root;
    this.index = 0;

    this.init = this.init.bind(this);
    this.createItems = this.createItems.bind(this);
    this.display = this.display.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.init();
    this.createItems(items);
    this.display();
  }

  createItems(items) {
    this.items = items.map(item => {
      const ingredients = item.ingredients.map(([ingredient, value]) =>
        makeIngredient(ingredient, value)
      );
      return {
        ...item,
        ingredients
      };
    });
  }

  init() {
    this.name = this.root.querySelector('.js-pizza__name');
    this.image = this.root.querySelector('.js-pizza__image');
    this.pieChart = this.root.querySelector('.js-pie-chart');
    this.chart = this.root.querySelector('.js-chart');
    this.leftArrow = new ArrowButton(
      this.root.querySelector('.arrow-button_left')
    );
    this.rightArrow = new ArrowButton(
      this.root.querySelector('.arrow-button_right')
    );
    this.list = this.root.querySelector('.js-pizza__list');

    this.leftArrow.onClick(this.previous);
    this.rightArrow.onClick(this.next);
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

    new Chart(this.chart, {
      value: rating,
      fill: rating > 0.6 ? '#68BB68' : '#D28847'
    });

    new PieChart(this.pieChart, {
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
      this.rightArrow.disable();
    } else {
      this.leftArrow.activate();
    }

    this.display();
  }

  previous() {
    if (this.index <= 0) return;

    this.index = this.index - 1;

    if (this.index === 0) {
      this.leftArrow.disable();
    } else {
      this.rightArrow.activate();
    }

    this.display();
  }
}

export default Pizza;
