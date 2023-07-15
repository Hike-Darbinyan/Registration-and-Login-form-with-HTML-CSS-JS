document.addEventListener('DOMContentLoaded' , () => {
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const registrationForm = document.querySelector('.form-box.register form');
let username = '';
let email = '';
let password = '';

registerLink.addEventListener('click' , () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click' , () => {
    wrapper.classList.remove('active');
})
btnPopup.addEventListener('click' , () => {
        wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click' , () => {
    wrapper.classList.remove('active-popup');
})

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

})
})



