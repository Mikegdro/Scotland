
const menuBtn = document.querySelector('.menuButton');
let menuOpn = false;
let menu = document.querySelector('.hiddenMenu');

menuBtn.addEventListener('click', () => {
    if(!menuOpn) {
        menuBtn.classList.toggle('open');
        menu.style.maxWidth = window.innerWidth + 'px';
        menuOpn = true;
    } else {
        menuBtn.classList.toggle('open');
        menu.style.maxWidth = null;
        menuOpn = false;
    }
});