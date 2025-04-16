window.addEventListener("load", () => {
    const video = document.getElementById("bg-video");
    video.style.opacity = 0;
    setTimeout(() => {
      video.style.transition = "opacity 2s ease-in-out";
      video.style.opacity = 1;
    }, 100);
  });



const scrollToTopButton = document.getElementById("scrollToTop");

// Function to show or hide the button based on scroll position
function toggleScrollToTopButton() {
    if (window.scrollY > 300) { // Show the button when the user scrolls down 300px
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
}

// Function to smoothly scroll back to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Enable smooth scrolling
    });
}

// Listen for scroll events
window.addEventListener("scroll", toggleScrollToTopButton);

// Listen for click events on the button
scrollToTopButton.addEventListener("click", scrollToTop);



