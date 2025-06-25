// Elements


const prevBtnAll = document.querySelectorAll(".arrows__left");
const nextBtnAll = document.querySelectorAll(".arrows__right")

let currentIndex = 0;

const mobileHeros = ["images/mobile-image-hero-1.jpg", "images/mobile-image-hero-2.jpg", 
    "images/mobile-image-hero-3.jpg"]

const desktopHeros = ["images/desktop-image-hero-1.jpg", "images?desktop-image-hero-2.jpg", 
    "images/desktop-image-hero-3.jpg"]


    // Event Listeners

prevBtnAll.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        showPrevHero(currentIndex, e);
    })
})




    // Functions

    function showPrevHero(index, event) {
        let hero = event.target.parentNode.parentNode.parentNode;
        console.log(hero)

        let screen = window.innerWidth;
        console.log(screen)

        if (index > 0) {
            hero.style.transform = `translate(-${screen}px)`
            currentIndex--;
        } else {
            hero.style.transform = `translate(${screen * 2}px)`
            currentIndex = 2;
        }
    }