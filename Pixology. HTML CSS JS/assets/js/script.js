const openBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.burger-close');
const nav = document.querySelector('.nav-wrapper');
const header = document.querySelector('.header');
const nav_link = document.getElementsByClassName('nav__link');

/* BURGER MENU */

openBtn.addEventListener('click', function(){
    nav.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    nav.classList.remove('active');
});

/* STICKY HEADER */
const sticky = header.offsetTop;

window.onscroll = function(){
    if(window.pageYOffset > sticky){
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

/* NAVIGATION */

for (let link of nav_link){
    link.addEventListener('click', function(){
        for (let link of nav_link){
            link.classList.remove('active')
        }
        this.classList.add('active');
    });
}