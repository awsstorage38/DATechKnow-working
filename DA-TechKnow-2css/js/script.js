
// script.js
const toggleDot = document.querySelector('.toggle-dot');
const navbar = document.querySelector('#left');

toggleDot.addEventListener('click', () => {
    navbar.classList.toggle('show-navbar');
});