const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createListItems  = ({liClass = '', pClass = '', items}) => items.map(item => {
  const liEl = document.createElement('li');
  if (liClass !== '') {
    liEl.classList.add(liClass);
  }
  
  const pEl = document.createElement('p');
  if (pClass !== '') {
    liEl.classList.add(pClass);
  }
  pEl.textContent = item;

  liEl.appendChild(pEl);
  
  return liEl;
});

const ingridientList = createListItems ({liCssClass: 'item', items: ingredients});

const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(...ingridientList);