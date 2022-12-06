
const menuBtn = document.querySelector('.menuButton');
let menuOpn = false;
let menu = document.querySelector('.hiddenMenu');

var logo = document.querySelector('.logo');
var cambiado = false;


window.addEventListener("scroll", (event) => {
    if(menuOpn) {
        menuOpn = false;
        menuBtn.classList.toggle('open');
        menu.style.maxWidth = null;
    }

    if(this.scrollY > 850 && !cambiado){
        logo.style.backgroundImage="url('./src/images/logo.svg')";
        logo.style.paddingBottom = '50%';
        cambiado = true;
    } else if (this.scrollY < 850 && cambiado) {
        logo.style.backgroundImage="url('./src/images/logo.png')";
        cambiado = false;
        logo.style.paddingBottom = '25%';
    }
});

menuBtn.addEventListener('click', () => {
    if(!menuOpn) {
        menuBtn.classList.toggle('open');
        menu.style.maxWidth = window.innerWidth + 'px';
        console.log(document.body.getBoundingClientRect().top)
        menu.style.top = this.scrollY + 'px';
        menuOpn = true;
    } else {
        menuBtn.classList.toggle('open');
        menu.style.maxWidth = null;
        menuOpn = false;
    }
});