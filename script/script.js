const burgerMenu = document.querySelector('.burger-menu');
const bodyFilter = document.querySelector('.body-filter');
const burgerOpenBtn = document.querySelector('.burger-menu-open');
const burgerCloseBtn = document.querySelector('.burger-menu-close');

function burgerOpen() {
    burgerMenu.classList.add('active');
    bodyFilter.classList.add('active');
    burgerOpenBtn.style.display = 'none';
    burgerCloseBtn.style.display = 'flex';
}

function burgerClose() {
    burgerMenu.classList.remove('active');
    bodyFilter.classList.remove('active');
    burgerCloseBtn.style.display = 'none';
    burgerOpenBtn.style.display = 'flex';
}

burgerOpenBtn.onclick = burgerOpen;
burgerCloseBtn.onclick = burgerClose;
