const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    if (nav.classList.contains('nav-list--openned')){
        nav.classList.remove('nav-list--openned');
        nav.classList.add('nav-list--closed');
    } else {
        nav.classList.remove('nav-list--closed');
        nav.classList.add('nav-list--openned');
    }
});