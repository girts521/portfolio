const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const btn = document.querySelector('#btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const text = document.querySelector('#text');

//nav functionality

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
            nav.setAttribute('style', 'background-color: rgba(156, 39, 176, 0.4);')
        }
        if(window.scrollY < 200){
            nav.removeAttribute('style', 'background-color: rgba(156, 39, 176, 0.4);')
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
        nav.setAttribute('style', 'background-color: rgba(156, 39, 176, 0.9); transition:0.4s;')
    }
})

//Form submittion

btn.addEventListener('click', (event) => {
    console.log('click')
    event.preventDefault()
    const data = {
       name: name.value,
       email: email.value, 
       text: text.value
    }
    console.log(data)

axios.post('https://gkarcevskis-homework-api.herokuapp.com/data', {data})
// axios.post('http://localhost:5000/data', {data})
.then(res => {
    console.log(res.data.msg)
})
.catch(e => {
    console.log(e)
})

})