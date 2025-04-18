document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const navbar = document.querySelector('.navbar');
    const swiperContainer = document.querySelector('.swiper-container');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const pagination = document.querySelector('.swiper-pagination');
    let autoSlideTimer;

    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    function updatePagination() {
        const slides = document.querySelectorAll('.swiper-slide');
        const activeSlide = document.querySelector('.swiper-slide.active');
        const activeIndex = Array.from(slides).indexOf(activeSlide);

        pagination.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('swiper-pagination-bullet');
            if (index === activeIndex) {
                dot.classList.add('swiper-pagination-bullet-active');
            }
            pagination.appendChild(dot);
        });
    }

    function updateButtonStates() {
        const slides = document.querySelectorAll('.swiper-slide');
        const activeSlide = document.querySelector('.swiper-slide.active');
        const activeIndex = Array.from(slides).indexOf(activeSlide);

        prevButton.disabled = activeIndex === 0;
        nextButton.disabled = activeIndex === slides.length - 1;
    }

    function initSwiper() {
        const slides = document.querySelectorAll('.swiper-slide');
        slides[0].classList.add('active');
        updatePagination();
        updateButtonStates();
    }

    function autoSlide() {
        const slides = document.querySelectorAll('.swiper-slide');
        const activeSlide = document.querySelector('.swiper-slide.active');
        const activeIndex = Array.from(slides).indexOf(activeSlide);
        const nextIndex = (activeIndex + 1) % slides.length;

        activeSlide.classList.remove('active');
        slides[nextIndex].classList.add('active');
        updatePagination();
        updateButtonStates();
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.swiper-slide');
        const activeSlide = document.querySelector('.swiper-slide.active');
        const activeIndex = Array.from(slides).indexOf(activeSlide);
        const nextIndex = (activeIndex + 1) % slides.length;

        activeSlide.classList.remove('active');
        slides[nextIndex].classList.add('active');
        updatePagination();
        updateButtonStates();
        resetAutoSlide();
    }

    function prevSlide() {
        const slides = document.querySelectorAll('.swiper-slide');
        const activeSlide = document.querySelector('.swiper-slide.active');
        const activeIndex = Array.from(slides).indexOf(activeSlide);
        const prevIndex = (activeIndex - 1 + slides.length) % slides.length;

        activeSlide.classList.remove('active');
        slides[prevIndex].classList.add('active');
        updatePagination();
        updateButtonStates();
        resetAutoSlide();
    }

    function handlePaginationClick(e) {
        if (e.target.classList.contains('swiper-pagination-bullet')) {
            const slides = document.querySelectorAll('.swiper-slide');
            const dots = document.querySelectorAll('.swiper-pagination-bullet');
            const dotIndex = Array.from(dots).indexOf(e.target);

            document.querySelector('.swiper-slide.active').classList.remove('active');
            slides[dotIndex].classList.add('active');
            updatePagination();
            updateButtonStates();
            resetAutoSlide();
        }
    }

    function resetAutoSlide() {
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(autoSlide, 5000);
    }

    swiperContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideTimer);
    });

    swiperContainer.addEventListener('mouseleave', () => {
        resetAutoSlide();
    });

    initSwiper();
    autoSlideTimer = setInterval(autoSlide, 5000);
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    pagination.addEventListener('click', handlePaginationClick);
});