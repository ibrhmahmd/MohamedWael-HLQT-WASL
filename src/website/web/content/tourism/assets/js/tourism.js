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

// Changing Text Animation
const changingText = document.querySelector('.changing-text');
const places = [
 "Baltim Summer Resort",
 "Kafr El-Sheikh Museum",
 "Shakhlouba Island",
 "King Fouad Post Station",
 "King Fuad I Palace",
 "Hill of the Pharaohs",
 "Edfina Bridges"
];

let currentPlaceIndex = 0;

function changePlaceText() {
 changingText.style.animation = 'none';
 void changingText.offsetWidth; // Trigger reflow
 changingText.style.animation = 'fadeIn 1.5s ease-in-out';

 changingText.textContent = places[currentPlaceIndex];
 currentPlaceIndex = (currentPlaceIndex + 1) % places.length;

 setTimeout(changePlaceText, 3000);
}

setTimeout(changePlaceText, 3000);