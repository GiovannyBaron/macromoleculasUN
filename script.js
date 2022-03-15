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

const carousel = document.querySelector(".carousel-items");

let maxscrollLeft = carousel.scrollWidth - carousel.clientWidth;
let interval = null;
let step = 2;

const start = () => {
    interval = setInterval(function() {
    carousel.scrollLeft = carousel.scrollLeft + step;
    if(carousel.scrollLeft === maxscrollLeft) {
        step = step * -10;
    } else if (carousel.scrollLeft === 0) {
        step = 2;
    }
    }, 10);
};

const stop = () => {
    clearInterval(interval);
};

carousel.addEventListener('mouseover', () => {
    stop();
});

carousel.addEventListener('mouseout', () => {
    start();
});

start();