import '../../styles.js';
import './menu.scss';

import '../../composite/pizza/pizza.scss';

import '../../static/images/pepperoni.jpg';
import '../../static/images/cheesy_crust.jpg';
import '../../static/images/vegetarian.jpg';

import {chart} from '../../scripts';

//lol
const Factory = (function() {
    function Ingredient(name, color, value) {
        this.name = name;
        this.color = color;
        this.value = value;

        let li = document.createElement('li');
        li.innerText = this.name;
        this.el = li;
    }

    return function (type, val) {
        switch(type) {
            case 'Tomatoes':
                return new Ingredient('Tomatoes', '#DF3232', val);
            case 'Mozarella':
                return new Ingredient('Mozarella', '#EDED86', val);
            case 'Pepperoni':
                return new Ingredient('Pepperoni', 'brown', val);
            case 'Onions':
                return new Ingredient('Onions', '#B96C93', val);
            default:
                throw new Error('No ingredient!');
        }
    }
})();

const items = [
    {
        name: 'pepperoni',
        src: 'images/pepperoni.jpg',
        rating: 0.82,
        ing: [
            Factory('Tomatoes', 0.2),
            Factory('Mozarella', 0.5),
            Factory('Pepperoni', 0.8)
        ]
    },
    {
        name: 'cheesy crust',
        src: 'images/cheesy_crust.jpg',
        rating: 0.95,
        ing: [
            Factory('Tomatoes', 0.1),
            Factory('Mozarella', 0.7),
            Factory('Pepperoni', 0.9)
        ]
    },
    {
        name: 'vegetarian',
        src: 'images/vegetarian.jpg',
        rating: 0.37,
        ing: [
            Factory('Tomatoes', 0.2),
            Factory('Mozarella', 0.6),
            Factory('Onions', 0.9)
        ]
    }
]

const displayItem = (function() {
    function display(item) {
        document.querySelector('.pizza-name').innerHTML = item.name;
        document.querySelector('.pizza-img img').src = item.src;
    
        let html = document.createElement('ul');
    
        item.ing.forEach(el => {
            html.appendChild(el.el);
        });
    
        document.querySelector('.pizza-ing-li').innerHTML = '';
        document.querySelector('.pizza-ing-li').appendChild(html);
    
        chart.percent('.circle', {
            value: item.rating, 
            fill: item.rating > 0.6 ? '#68BB68' : '#D28847'
        });
    
        chart.pie('.pie', {fill: {
                sectors: item.ing.map(el => [el.color, el.value])
            }
        });
    }

    let i = 0;

    return {
        current: function() {
            display(items[i]);
        },
        next: function() {
            if(i >= items.length - 1) return;

            i++;
            if(i === items.length - 1) {
                document.querySelector('.right-arrow').classList.add('disabled-arrow-button');
            } else {
                document.querySelector('.left-arrow').classList.remove('disabled-arrow-button');
            }
            display(items[i]);

        },
        previous: function() {
            if(i <= 0) return;

            i--;
            if(i === 0) {
                document.querySelector('.left-arrow').classList.add('disabled-arrow-button');
            } else {
                document.querySelector('.right-arrow').classList.remove('disabled-arrow-button');
            }
            display(items[i]);
        }
    }
})();

window.onload = function() {
    displayItem.current();

    document.querySelector('.right-arrow').addEventListener('click', function(e) {
        displayItem.next();
    });

    document.querySelector('.left-arrow').addEventListener('click', function(e) {
        displayItem.previous();
    });
}