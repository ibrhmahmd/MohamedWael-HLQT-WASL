
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
        }, 250);
    } else {
        setTimeout(updateProgress, 20);
    }
}

updateProgress();