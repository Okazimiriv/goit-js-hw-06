const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredients = options => {
  return options.map(option => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = option;
    ingredientsEl.classList.add('item');

    return ingredientsEl;
  });
};

const elements = makeIngredients(ingredients);
ingredientsList.append(...elements);

