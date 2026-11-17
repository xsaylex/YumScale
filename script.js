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


const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(item => item.classList.remove('active'));
        tabContents.forEach(item => item.classList.remove('active'));

        btn.classList.add('active');

        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});


const modal = document.getElementById('my-modal');
const openBtns = document.querySelectorAll('.head__btn--primary');
const closeBtn = document.querySelector('.close-modal');
const orderForm = document.getElementById('orderForm');

openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('open');
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open');
    }
});

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Дякуємо! Ваше замовлення прийнято.');
        orderForm.reset();
        modal.classList.remove('open');
    });
}