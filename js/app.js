// get year
const year = document.querySelector('#year');
const date = new Date();
year.innerHTML = date.getFullYear();

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero-header');

const sectionOptions = {
    rootMargin: "-350px 0px 0px 0px"
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

// const searchbar = document.querySelector('#searchbar');
// const items = document.querySelectorAll('.item');
// const foodItems = document.querySelectorAll('.food-items');
// searchbar.addEventListener('keyup', function (e) {
//     const term = e.target.value.toLowerCase();
//     console.log(term)

//     items.forEach((item) => {
//         const itemName = item.firstElementChild.textContent;

//         if (itemName.toLowerCase().indexOf(term) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     })
// })


// const orderItem = document.querySelector('#order-item');
// items.forEach((item) => {
//     item.addEventListener('click', () => {
//         orderItem.classList.add('active');
//         const itemName = document.querySelector('.item-name');
//         const itemDescrption = document.querySelector('.item-descrption');
//         const itemPrice = document.querySelector('.item-price');
//         const itemTitle = item.firstElementChild.textContent;
//         const itemPara = item.firstElementChild.nextElementSibling.textContent;
//         const itemCost = item.firstElementChild.nextElementSibling.nextElementSibling.textContent;
//         itemName.textContent = itemTitle;
//         itemDescrption.textContent = itemPara;
//         itemPrice.textContent = itemCost;
//     });
// });
// const closeBtn5 = document.querySelector('.closeBtn4');
// const orderItemContainer = document.querySelector('.order-item-container');

// closeBtn5.addEventListener('click', () => {
//     orderItem.classList.remove('active');
// });

// window.addEventListener('click', (e) => {
//     if (e.target === orderItemContainer) {
//         orderItem.classList.remove('active');
//     }
// })

// foodItems.forEach((food) => {
//     console.log(food);
//     const category = food.firstElementChild.firstElementChild;
//     console.log(category);
// })

// loginBtn2.addEventListener('click', () => {
//     signUp.classList.remove('active');
//     login.classList.add('active');
// })

// const fname = document.querySelector('#fname');
// const lname = document.querySelector('#lname');
// const email = document.querySelector('#email');
// const phone = document.querySelector('#phone');
// const password = document.querySelector('#password');
// const register = document.querySelector('#register');

// register.addEventListener('click', () => {
//     Emptyvalidation(fname, 2, "Please provide a first name");
//     Emptyvalidation(lname, 3, "Please provide a last name");
//     Emptyvalidation(email, 4, "Please provide an email");
//     Emptyvalidation(phone, 5, "Please provide a phone number");
//     Emptyvalidation(password, 6, "Please provide a password");
// });


// const submit = document.querySelector('#sign-in');
// const loginEmail = document.querySelector('#login_email');
// const loginPassword = document.querySelector('#login_password');

// submit.addEventListener('click', () => {
//     Emptyvalidation(loginEmail, 0, "Please provide an email");
//     Emptyvalidation(loginPassword, 1, "Please provide an password");
// });

// function Emptyvalidation(input, index, text) {
//     if (input.value === '') {
//         let error = document.getElementsByClassName('text-danger')[index];
//         error.textContent = text;
//     } else {
//         let error = document.getElementsByClassName('text-danger')[index];
//         error.textContent = '';
//     }
// }

$(document).ready(function () {
    $('.menu-list li').on('click', function () {
        $('.menu-list li.active').removeClass('active');
        $(this).addClass('active');

        var listItem = $(this).attr('data-id');

        $('.menu-items-container.active').fadeOut(500, showNext);

        function showNext() {
            $(this).removeClass('active');
            $("#" + listItem).fadeIn(500, function () {
                $(this).addClass('active');
            })
        }
    });


    $("#categories").change(function () {
        var selected = $(this).children("option:selected").val();
        console.log(selected);

        $('.food-items.active').fadeOut(500, showFood);

        function showFood() {
            $(this).removeClass('active');
            $("#" + selected).fadeIn(500, function () {
                $(this).addClass('active');
            })
        }
    })
});

// // date
// const year = document.querySelector('#year');
// const date = new Date();
// year.innerHTML = date.getFullYear();