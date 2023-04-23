const counter = document.querySelector('#counter');
const counterValueEl = counter.querySelector('#value');
let counterValue = 0;

const decrementBtn = counter.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    counterValue -= 1
    counterValueEl.textContent = counterValue;
});

const incrementBtn = counter.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
    counterValue += 1
    counterValueEl.textContent = counterValue;
});
