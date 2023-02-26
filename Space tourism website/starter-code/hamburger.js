const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav-wrapper');
const burgerIcon = document.querySelector('.burger-icon');

const navToggle = (nav) => {
    if (window.getComputedStyle(nav).display === 'none'){
        nav.style.display = 'block';
        burgerIcon.classList.add('burger-icon--close');
    } else {
        nav.style.display = 'none';
        burgerIcon.classList.remove('burger-icon--close');
    }
}

burger.addEventListener('click', () => {
    navToggle(nav);
});
