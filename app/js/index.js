// Elements

const heroContainer = document.querySelector(".hero-container");
const prevBtnAll = document.querySelectorAll(".arrows__left");
const nextBtnAll = document.querySelectorAll(".arrows__right");
const heros = document.querySelectorAll(".hero");

let currentIndex = 0;


const mobileHeros = ["images/mobile-image-hero-1.jpg", "images/mobile-image-hero-2.jpg", 
    "images/mobile-image-hero-3.jpg"];

const desktopHeros = ["images/desktop-image-hero-1.jpg", "images?desktop-image-hero-2.jpg", 
    "images/desktop-image-hero-3.jpg"];


    // Event Listeners

prevBtnAll.forEach((btn) => {
    btn.addEventListener("click", () => {
        showPrevHero(currentIndex);
    })
})

nextBtnAll.forEach((btn) => {
    btn.addEventListener("click", () => {
        showNextHero(currentIndex);
    })
})




    // Functions

    function showPrevHero(index) {
        

        heros.forEach((hero) => {
            hero.style.transform = `translate(100%)`;
        })

        if (index > 0) {
            heros.forEach((hero) => {
            hero.style.transform = `translate(100%)`;
        })
            currentIndex--;
        } else {
            heros.forEach((hero) => {
            hero.style.transform = `translate(-200%)`;
        })
            currentIndex = 2;
        }

        console.log("Index: " + currentIndex)
    }

    function showNextHero(index) {
        
        console.log("next");

       

        if (index < heros.length - 1) {
            heros.forEach((hero) => {
            hero.style.transform = `translate(-100%)`;
        })
            currentIndex++;
        } else {
            heros.forEach((hero) => {
            hero.style.transform = `translate(200%)`;
        })
            currentIndex = 0;
        }


        console.log("Index: " + currentIndex)
    }