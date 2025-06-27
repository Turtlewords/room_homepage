// Elements

const carousel = document.querySelector(".carousel");
const track = document.querySelector(".carousel__track");

const slides = document.querySelectorAll(".carousel__slide");

const prevBtn = document.querySelector(".carousel__button--left");
const nextBtn = document.querySelector(".carousel__button--right");
const heroMenuBtn = document.querySelector(".hero__menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBackground = document.querySelector(".mobile-menu__background");
const closeMobileMenuBtn = document.querySelector(".mobile-menu__close-btn");

const prevBtnList = document.querySelectorAll(".carousel__button--left");
const nextBtnList = document.querySelectorAll(".carousel__button--right");

const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach(setSlidePosition);


    // Event Listeners

prevBtnList.forEach((btn) => {
    btn.addEventListener("click", () => {
        let lastIndex = slides.length - 1;
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;

    if (slides[0].classList.contains("current-slide")) {
        const resetToMove = slides[lastIndex].style.left;
        slides[0].classList.remove("current-slide")
        slides[lastIndex].classList.add("current-slide")
        track.style.transform = `translateX(-${resetToMove})`

    } else {
        moveToSlide(track, currentSlide, prevSlide)
    }
    
    })
    
})


nextBtnList.forEach((btn) => {
    btn.addEventListener("click", () => {
        const lastIndex = slides.length - 1;
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;

    if (slides[lastIndex].classList.contains("current-slide")) {
        const resetToMove = slides[0].style.left;
        slides[lastIndex].classList.remove("current-slide")
        slides[0].classList.add("current-slide")
        track.style.transform = `translateX(${resetToMove})`

    } else {
        moveToSlide(track, currentSlide, nextSlide)
    }
    
    })
    
})

heroMenuBtn.addEventListener("click", showMobileMenu);

closeMobileMenuBtn.addEventListener("click", closeMobileMenu);


    // Functions

function setSlidePosition(slide, index) {
    slide.style.left = `${slideWidth * index}px`
}


function moveToSlide(track, currentSlide, targetSlide) {
    
    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

function showMobileMenu() {
    
    mobileMenuBackground.style.transform = "translateY(0)";
    mobileMenu.style.transform = "translateY(0)";
}

function closeMobileMenu() {
    mobileMenuBackground.style.transform = "translateY(-100%)";
    mobileMenu.style.transform = "translateY(-100%)";
   
}

