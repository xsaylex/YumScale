const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 3,
    watchSlidesProgress: true,

breakpoints: {
    320: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
},

navigation: {
    nextEl: ".ration-slider__next",
    prevEl: ".ration-slider__prev",
},

autoplay: {
    delay: 3500,
    disableOnInteraction: false,
},
});





const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
