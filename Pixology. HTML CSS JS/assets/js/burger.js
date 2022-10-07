const openBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.burger-close');
const nav = document.querySelector('.nav-wrapper');

openBtn.addEventListener('click', function(){
    nav.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    nav.classList.remove('active');
});