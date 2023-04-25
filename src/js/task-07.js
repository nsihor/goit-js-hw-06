const inputRange = document.querySelector('#font-size-control');
const rangeText = document.querySelector('#text')

rangeText.style.fontSize = `${inputRange.value}px`;

inputRange.addEventListener('input', () => {
        rangeText.style.fontSize = `${inputRange.value}px`;
})