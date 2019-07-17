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

const items = [
  {
    name: 'pepperoni',
    src: 'images/pepperoni.jpg',
    rating: 0.82,
    ingredients: [
      Factory('Tomatoes', 0.2),
      Factory('Mozarella', 0.5),
      Factory('Pepperoni', 0.8)
    ]
  },
  {
    name: 'cheesy crust',
    src: 'images/cheesy_crust.jpg',
    rating: 0.95,
    ingredients: [
      Factory('Tomatoes', 0.1),
      Factory('Mozarella', 0.7),
      Factory('Pepperoni', 0.9)
    ]
  },
  {
    name: 'vegetarian',
    src: 'images/vegetarian.jpg',
    rating: 0.37,
    ingredients: [
      Factory('Tomatoes', 0.2),
      Factory('Mozarella', 0.3),
      Factory('GreenStuff', 0.8),
      Factory('Onions', 0.9)
    ]
  }
];

const displayItem = (function displayItem() {
  function display(item) {
    document.querySelector('.pizza__name').innerHTML = item.name;
    document.querySelector('.pizza__image').src = item.src;

    const html = document.createElement('ul');

    item.ingredients.forEach(ingredient => {
      html.appendChild(ingredient.element);
    });

    document.querySelector('.pizza__li').innerHTML = '';
    document.querySelector('.pizza__li').appendChild(html);

    /*
    chart('.chart', {
      value: item.rating,
      fill: item.rating > 0.6 ? '#68BB68' : '#D28847'
    });

    pie('.pie', {
      fill: {
        sectors: item.ingredients.map(ingredient => [
          ingredient.color,
          ingredient.value
        ])
      }
    });*/
  }

  let i = 0;

  return {
    current() {
      display(items[i]);
    },
    next() {
      if (i >= items.length - 1) return;

      i += 1;
      if (i === items.length - 1) {
        document
          .querySelector('.arrow-button_right')
          .classList.add('arrow-button_disabled');
      } else {
        document
          .querySelector('.arrow-button_left')
          .classList.remove('arrow-button_disabled');
      }
      display(items[i]);
    },
    previous() {
      if (i <= 0) return;

      i -= 1;
      if (i === 0) {
        document
          .querySelector('.arrow-button_left')
          .classList.add('arrow-button_disabled');
      } else {
        document
          .querySelector('.arrow-button_right')
          .classList.remove('arrow-button_disabled');
      }
      display(items[i]);
    }
  };
})();

(function init() {
  if (!document.querySelector('.pizza')) return;

  displayItem.current();
  document
    .querySelector('.arrow-button_right')
    .addEventListener('click', () => {
      displayItem.next();
    });

  document.querySelector('.arrow-button_left').addEventListener('click', () => {
    displayItem.previous();
  });
})();
