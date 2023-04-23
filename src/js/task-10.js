function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  let boxesHTML = '' 
  
  for (let i = 0; i < amount; i++) {
    let bgColor = getRandomHexColor();
    boxesHTML += `<div style = "height:${size}px; width:${size}px;  background-color:${bgColor};"></div>`;
    size += 10;
  }

  boxesContainer.insertAdjacentHTML("beforeend", boxesHTML);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

const controls = document.querySelector('#controls');
const inputNumberEl = controls.querySelector('input');
const boxesContainer = document.querySelector('#boxes');

const createBoxesBtn = controls.querySelector('[data-create]');
createBoxesBtn.addEventListener('click', () => createBoxes(inputNumberEl.value));

const destroyBoxesBtn = controls.querySelector('[data-destroy]');
destroyBoxesBtn.addEventListener('click', destroyBoxes);
