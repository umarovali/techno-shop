const burger = document.querySelector('.menu_burger');
const menu = document.querySelector('.menu');
const body = document.body;

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});
