const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

window.addEventListener('load', () => {
    if (window.innerWidth < 768) {
        navLinks.setAttribute('id', 'navLinks')
    } else {
        navLinks.removeAttribute('id', 'navLinks')
    }
});

document.addEventListener('scroll', () => {
    if (window.innerWidth > 1439){
        if(window.scrollY > 200){
            nav.setAttribute('style', 'background-color: rgba(5, 3, 3, 0.4);')
        }
        if(window.scrollY < 200){
            nav.removeAttribute('style', 'background-color: rgba(5, 3, 3, 0.4);')
        }
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        navLinks.setAttribute('id', 'navLinks')
    } else {
        navLinks.removeAttribute('id', 'navLinks');
        navLinks.removeAttribute('style');
        nav.removeAttribute('style');
    }
})

burger.addEventListener('click', () => {
    if (navLinks.hasAttribute('style')) {
        navLinks.removeAttribute('style')
        nav.removeAttribute('style', 'opacity:1;')
    } else {
        navLinks.setAttribute('style', 'display: flex; flex-direction: column;')
        nav.setAttribute('style', 'background-color: rgba(5, 3, 3, 0.9); transition:0.4s;')
    }
})