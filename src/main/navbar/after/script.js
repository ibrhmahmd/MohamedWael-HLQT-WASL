const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        body.classList.toggle('no-scroll');

        navLinks.forEach((link, index) => {
            link.style.animation = '';
            if (nav.classList.contains('nav-active')) {
                link.style.animation = `slideIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                link.style.transform = 'translateX(30px)';
                // link.style.opacity = '0';
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();