const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients")

const element = [];
const liElFor = ingredients.forEach((iter) => {
  const liEl = document.createElement('li');
  liEl.classList.add('.item');
  liEl.textContent = iter
  // console.log(iter);
  element.push(liEl);
})
ingredientsEl.append(...element);
