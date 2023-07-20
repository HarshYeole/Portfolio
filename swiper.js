//for worksection slider...

var swiper = new Swiper(".myswiper", {

    autoplay: true,
    autoplay: {
        delay: 1000,
    },
    autoplayHoverPause: true,

    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 600,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
}); 