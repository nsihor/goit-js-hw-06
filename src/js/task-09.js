function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorWidget = document.querySelector('.widget');

const changeColorBtn = changeColorWidget.querySelector('.change-color');
changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  let colorName = changeColorWidget.querySelector('.color');

  document.body.style.backgroundColor = color;
  colorName.textContent = color;
})