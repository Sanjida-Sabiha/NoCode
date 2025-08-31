var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
    },
});



function toggleFilter() {
    const filterMenu = document.getElementById('filterMenu');
    const filterOptions = document.getElementById('filterOptions');
    filterOptions.classList.toggle('hidden'); // Assuming you have a hidden class to toggle visibility
    filterMenu.querySelector('svg').classList.toggle('rotate-180'); // Toggle the arrow direction
}



