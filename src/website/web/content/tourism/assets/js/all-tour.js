   // Loading Screen
   const loadingScreen = document.querySelector('.loading-screen'),
   progressBar = document.querySelector('.progress');

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

// Navbar
const navSlide = () => {
 const burger = document.querySelector('.burger'),
       nav = document.querySelector('.nav-links'),
       navLinks = document.querySelectorAll('.nav-links li'),
       body = document.querySelector('body');

 burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     body.classList.toggle('no-scroll');

     navLinks.forEach((link, index) => {
         link.style.animation = '';
         if (nav.classList.contains('nav-active')) {
             link.style.animation = `slideIn 0.5s ease forwards ${index / 7 + 0.3}s`;
         } else {
             link.style.transform = 'translateX(30px)';
         }
     });

     burger.classList.toggle('toggle');
 });
};

navSlide();

// Mini Swiper with Arrows
const miniSwiper = document.querySelector('.mini-swiper'),
   miniSlides = document.querySelectorAll('.mini-slide'),
   miniPagination = document.querySelector('.mini-pagination'),
   miniDots = document.querySelectorAll('.mini-pagination span'),
   prevBtn = document.querySelector('.swiper-button-prev'),
   nextBtn = document.querySelector('.swiper-button-next');

let miniCurrentIndex = 0;
const totalSlides = miniSlides.length;
let swiperInterval;

function updateMiniSwiper() {
 miniSwiper.style.transform = `translateX(-${miniCurrentIndex * 100}%)`;

 // Update pagination dots
 miniDots.forEach((dot, index) => {
     dot.classList.toggle('active', index === miniCurrentIndex);
 });

 // Update button states
 prevBtn.classList.toggle('disabled', miniCurrentIndex === 0);
 nextBtn.classList.toggle('disabled', miniCurrentIndex === totalSlides - 1);
}

// Initialize swiper
function initSwiper() {
 updateMiniSwiper();

 // Auto slide
 swiperInterval = setInterval(() => {
     if (miniCurrentIndex < totalSlides - 1) {
         miniCurrentIndex++;
     } else {
         miniCurrentIndex = 0;
     }
     updateMiniSwiper();
 }, 5000);
}

// Next button click
nextBtn.addEventListener('click', () => {
 if (miniCurrentIndex < totalSlides - 1) {
     miniCurrentIndex++;
     updateMiniSwiper();
     resetAutoSlide();
 }
});

// Previous button click
prevBtn.addEventListener('click', () => {
 if (miniCurrentIndex > 0) {
     miniCurrentIndex--;
     updateMiniSwiper();
     resetAutoSlide();
 }
});

// Pagination dots click
miniDots.forEach((dot, index) => {
 dot.addEventListener('click', () => {
     miniCurrentIndex = index;
     updateMiniSwiper();
     resetAutoSlide();
 });
});

// Reset auto-slide timer
function resetAutoSlide() {
 clearInterval(swiperInterval);
 swiperInterval = setInterval(() => {
     if (miniCurrentIndex < totalSlides - 1) {
         miniCurrentIndex++;
     } else {
         miniCurrentIndex = 0;
     }
     updateMiniSwiper();
 }, 5000);
}

// Pause auto-slide on hover
const swiperContainer = document.querySelector('.mini-swiper-container');
swiperContainer.addEventListener('mouseenter', () => {
 clearInterval(swiperInterval);
});

swiperContainer.addEventListener('mouseleave', () => {
 resetAutoSlide();
});

// Initialize the swiper
initSwiper();