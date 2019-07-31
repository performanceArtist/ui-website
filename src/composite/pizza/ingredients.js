const makeIngredient = (function Factory() {
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

export default makeIngredient;
