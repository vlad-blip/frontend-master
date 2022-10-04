const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    if (nav.style.display === 'none'){
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});