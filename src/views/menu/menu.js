import '../../styles.js';
import './menu.scss';

import '../../composite/pizza/pizza.scss';

import '../../static/images/pepperoni.jpg';
import '../../static/images/cheesy_crust.jpg';
import '../../static/images/vegetarian.jpg';

import {chart} from '../../scripts';

function Ingredient(name, color, value) {
    this.name = name;
    this.color = color;
    this.value = value;
}

const items = [
    {
        name: 'pepperoni',
        src: 'images/pepperoni.jpg',
        rating: 0.82,
        ing: [
            new Ingredient('Tomatoes', '#ff6347', 0.2),
            new Ingredient('Mozarella', 'yellow', 0.5),
            new Ingredient('Pepperoni', 'brown', 0.8),
        ]
    },
    {
        name: 'cheesy crust',
        src: 'images/cheesy_crust.jpg',
        rating: 0.95,
        ing: [
            new Ingredient('Tomatoes', '#ff6347', 0.2),
            new Ingredient('Mozarella', 'yellow', 0.5),
            new Ingredient('Pepperoni', 'brown', 0.8),
        ]
    },
    {
        name: 'vegetarian',
        src: 'images/vegetarian.jpg',
        rating: 0.37,
        ing: [
            new Ingredient('Tomatoes', '#ff6347', 0.2),
            new Ingredient('Mozarella', 'yellow', 0.5),
            new Ingredient('Onions', '#B96C93', 0.9),
        ]
    }
]

function displayItem(i) {
    document.querySelector('.pizza-name').innerHTML = items[i].name;
    document.querySelector('.pizza-img img').src = items[i].src;

    let html = document.createElement('ul');

    items[i].ing.forEach(el => {
        let li = document.createElement('li');
        li.innerText = el.name;
        html.appendChild(li);
    });

    document.querySelector('.pizza-ing-li').innerHTML = '';
    document.querySelector('.pizza-ing-li').appendChild(html);

    chart.percent('.circle', {
        value: items[i].rating, 
        fill: items[i].rating > 0.6 ? '#68BB68' : '#D28847'
    });

    chart.pie('.pie', {fill: {
            sectors: items[i].ing.map(el => [el.color, el.value])
        }
    });

}

window.onload = function() {
    let i = 1;

    displayItem(i);

    document.querySelector('.right-arrow').addEventListener('click', function(e) {
        i++;
        displayItem(i);
    });

    document.querySelector('.left-arrow').addEventListener('click', function(e) {
        i--;
        displayItem(i);
    });
}