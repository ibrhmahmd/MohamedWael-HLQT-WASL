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




const loadingScreen = document.querySelector('.loading-screen');
const progressBar = document.querySelector('.progress');

let progress = 0;

function updateProgress() {
    progress += 1;
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
        setTimeout(() => {
            loadingScreen.style.transform = 'translateY(-100%)';
            loadingScreen.style.transition = 'transform 0.5s ease';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 500);
    } else {
        setTimeout(updateProgress, 20);
    }
}

updateProgress();


const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;

// Create bullets
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  pagination.appendChild(dot);
});

const updateSlider = () => {
  track.style.transform = `translateX(-${currentIndex * 100}vw)`;

  const dots = document.querySelectorAll('.pagination span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
};

// Auto-slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 4000); // Every 4 seconds

updateSlider(); // Init




