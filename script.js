const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});
const subMenubtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<subMenubtn.length; i++) {
    subMenubtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }

        }
    });
}

const carousels = document.querySelectorAll(".carousel-items");

const maxscrollLeft = carousel => carousel.scrollWidth - carousel.clientWidth;
let interval = null;
let step = 2;

const start = carousel => {
    interval = setInterval(function() {
    carousel.scrollLeft = carousel.scrollLeft + step;
    if(carousel.scrollLeft === maxscrollLeft(carousel)) {
        step = step * -1;
    } else if (carousel.scrollLeft === 0) {
        step = step * -1;
    }
    }, 10);
};

const stop = () => {
    clearInterval(interval);
};

carousels.forEach(carousel => {
    carousel.addEventListener('mouseover', () => {
        stop();
    });
    
    carousel.addEventListener('mouseout', () => {
        start(carousel);
    });

    start(carousel);
});

start();