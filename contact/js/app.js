const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const btn = document.querySelector('#btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const text = document.querySelector('#text');
const popUp = document.querySelector('.popUp');
const popUpText = document.querySelector('.popUpText')
const close = document.querySelector('.close');

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

    let config = {
        headers: {
            withCredentials: true,
        }
      }

      //check if input is valid and then send

axios.post('https://gkarcevskis-portfolio-api.herokuapp.com/data', {data})
// axios.post('http://localhost:5000/data', {data})
.then(res => {
    console.log(res.data.msg)
    console.log(res.data.sent)
    if(res.data.sent === true){
    showPopUp()
    }else{
        console.log('nop')
        errorPopUp()
    }
})
.catch(e => {
    console.log(e)
    errorPopUp('Ooops an error! Try again later...')
})

})

const errorPopUp = (text) => {
    if(text === undefined){
        popUpText.innerHTML = "<p> You have already sent me an email, please wait for me to contact you. Or please check your email, maybe I already have replied to you. Thanks <p/>"
    }else{
        popUpText.innerHTML = text;
    }
    popUp.setAttribute('style', 'display: block;')
    resetInput()
    setTimeout(() => {hidePopUp()}, 4000);
}

const showPopUp = () => {
    popUpText.innerHTML = "<p>I received your data, thanks. I will contact you via the email you provided. You can see JSON output here: <a href='https://gkarcevskis-homework-api.herokuapp.com/data'>https://gkarcevskis-homework-api.herokuapp.com/data</a> </p>"
    popUp.setAttribute('style', 'display: block;')
    resetInput()
    setTimeout(() => {hidePopUp()}, 4000);
}

const hidePopUp = () => {
    if(popUp.hasAttribute('style')){
        popUp.removeAttribute('style', 'display: block;')
        console.log('hide')
    }
}

const resetInput = () => {
    name.value = ''
    email.value = ''
    text.value = ''
}

close.addEventListener('click', () => {
    console.log('click')
    popUp.removeAttribute('style', 'display: block;')
})











