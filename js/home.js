// get year
const year = document.querySelector('#year');
const date = new Date();
year.innerHTML = date.getFullYear();

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

const sectionOptions = {
    rootMargin: "-550px 0px 0px 0px"
};

const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('scrolled')
        } else {
            navbar.classList.remove('scrolled')
        }
    })
}, sectionOptions);

sectionObserver.observe(hero);

const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const order = document.querySelector('#order');
const login = document.querySelector('#login');
const signUp = document.querySelector('#sign-up');
const loginSpan = document.querySelector('.login');
const modal = document.querySelector('.modal');


loginBtn.addEventListener('click', function () {
    order.classList.add('inactive');
})

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == login) {
        order.classList.remove('inactive');
    }
});

loginSpan.addEventListener('click', function () {
    if (signUp.classList.contains('show')) {
        signUp.classList.remove('modal')
        modal.classList.remove('modal-backdrop')
        signUp.classList.remove('fade')
        signUp.classList.remove('show')
    }
});