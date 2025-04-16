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
