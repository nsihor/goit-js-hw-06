const input = document.querySelector('#validation-input');


input.addEventListener('blur', () => {
    const inputRightDataLength = input.getAttribute('data-length');
    const inputValueLength = input.value.trim().length;
    
    if (inputValueLength === Number(inputRightDataLength)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});