export const initSlider = () => {

    // слайдер "Категории"
    const category = document.querySelector('.install');
    console.log('Я тут')
    if (category) {
        const item = new Swiper('.install-swiper', {
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }
}
export const initReviewSlider = () => {

    // слайдер "Категории"
    const category = document.querySelector('.review');
    console.log('Я тут')
    if (category) {
        const item = new Swiper('.review-swiper', {
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }
}
