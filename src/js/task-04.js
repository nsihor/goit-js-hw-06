const counter = document.querySelector('#counter');
const counterValueEl = counter.querySelector('#value');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');
let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1
    counterValueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1
    counterValueEl.textContent = counterValue;
});
