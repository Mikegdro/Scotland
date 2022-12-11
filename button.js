
const menuBtn = document.querySelector('.menuButton');
let menuOpn = false;
let menu = document.querySelector('.hiddenMenu');

var logo = document.querySelector('.wrapperLogo');
var cambiado = false;


window.addEventListener("scroll", (event) => {
    if(menuOpn) {
        menuOpn = false;
        menuBtn.classList.toggle('open');
        menu.style.maxWidth = null;
    }

    if(this.scrollY > 850 && !cambiado){
        logo.classList.toggle("onHero");
        cambiado = true;
    } else if (this.scrollY < 850 && cambiado) {
        logo.classList.toggle("onHero");
        cambiado = false;
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