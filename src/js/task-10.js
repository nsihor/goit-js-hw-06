function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (inputNumberEl.value < +inputNumberEl.min || inputNumberEl.value > +inputNumberEl.max) {
    console.log("🚀 ~ file: task-10.js:9 ~ createBoxes ~ inputNumberEl.value:", inputNumberEl.value)
    alert(`The entered number is greater than the max or less than the min allowed number!`)
    return;
  }

  let size = 30;
  let boxesHTML = '' 
  
  for (let i = 0; i < amount; i += +inputNumberEl.step) {
    let bgColor = getRandomHexColor();
    boxesHTML += `<div style = "height:${size}px; width:${size}px;  background-color:${bgColor};"></div>`;
    size += 10;
  }

  boxesContainer.insertAdjacentHTML("beforeend", boxesHTML);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  inputNumberEl.value = null;
}

const controls = document.querySelector('#controls');
const inputNumberEl = controls.querySelector('input');
const boxesContainer = document.querySelector('#boxes');

const createBoxesBtn = controls.querySelector('[data-create]');
createBoxesBtn.addEventListener('click', () => createBoxes(inputNumberEl.value));

const destroyBoxesBtn = controls.querySelector('[data-destroy]');
destroyBoxesBtn.addEventListener('click', destroyBoxes);