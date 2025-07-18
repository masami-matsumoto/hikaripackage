const btnOpen = document.querySelector('#menu-open');
const btnClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('.menu-container');
const menuLinks = document.querySelectorAll('.menu a');

btnOpen.addEventListener('click', () => {
    menuPanel.classList.add('panel-open');
});

btnClose.addEventListener('click', () => {
    menuPanel.classList.remove('panel-open');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuPanel.classList.remove('panel-open');
    });
});