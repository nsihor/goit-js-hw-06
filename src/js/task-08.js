const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', ev => {
    ev.preventDefault();

    const emailInputVal = loginForm.elements.email.value;
    const passwordInputVal = loginForm.elements.password.value;
    const formData = {};

    if (!emailInputVal || !passwordInputVal) {
        alert('All fields must be filled in!')
    } else {
        formData.email = emailInputVal;
        formData.password = passwordInputVal;
        console.log(formData);
        loginForm.reset()
    }
})