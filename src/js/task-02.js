const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createListItems  = ({liClass = '', items}) => items.map(item => {
  const liEl = document.createElement('li');

  liEl.textContent = item;
  if (liClass !== '') {
    liEl.classList.add(liClass);
  }

  return liEl;
});

const ingridientList = createListItems ({liCssClass: 'item', items: ingredients});

const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(...ingridientList);