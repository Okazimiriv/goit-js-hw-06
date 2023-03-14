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

//___________________
// const ingredientsList = document.querySelector('#ingredients');
// console.log(ingredientsList);
   
// const list = [];

// for (let i = 0; i < ingredients.length; i += 1){
//   const options = ingredients[i];

//   const ingredientsElement = document.createElement('li');
//   ingredientsElement.textContent = ingredients[i];
//   ingredientsElement.classList.add('item');
   
//   list.push(ingredientsElement);
//    console.log(ingredientsElement); 
// };

// ingredientsList.append(...list);
// console.log(ingredientsList);