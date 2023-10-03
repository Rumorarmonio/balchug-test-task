const slider_photos = document.querySelector('.swiper');

let swiper = new Swiper(slider_photos, {
    loop: true,
    allowTouchMove: false,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
