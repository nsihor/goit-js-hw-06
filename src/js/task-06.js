const input = document.querySelector('#validation-input');


input.addEventListener('blur', (e) => {
    const inputRightDataLength = input.getAttribute('data-length');
    const inputValueLength = input.value.trim().length;
    
    inputValueLength === Number(inputRightDataLength)? addValidClass(e): addInvalidClass(e);
});

function addValidClass(e) {
    e.currentTarget.classList.add('valid');
    e.currentTarget.classList.remove('invalid');
};

function addInvalidClass(e) {
    e.currentTarget.classList.add('invalid');
    e.currentTarget.classList.remove('valid');
}