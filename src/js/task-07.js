const inputRange = document.querySelector('#font-size-control');
const rangeText = document.querySelector('#text')

inputRange.addEventListener('input', () => {
        rangeText.style.fontSize = `${inputRange.value}px`;
})