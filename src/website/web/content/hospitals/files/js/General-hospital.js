// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate stats on scroll
const stats = document.querySelectorAll('.stat-item');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.number');
            const target = parseInt(number.textContent);
            let count = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    number.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    number.textContent = target;
                }
            };

            updateCount();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));

// Form validation and submission
const appointmentForm = document.getElementById('appointment');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const department = this.querySelector('select').value;
        const date = this.querySelector('input[type="date"]').value;

        if (!name || !email || !phone || !department || !date) {
            alert('Please fill in all required fields');
            return;
        }

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Appointment booked successfully! We will contact you shortly.');
        this.reset();
    });
}

// Add active class to current section in navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Image lazy loading
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Add animation to service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    serviceObserver.observe(card);
});

// Add animation to department cards on scroll
const departmentCards = document.querySelectorAll('.department-card');
const departmentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

departmentCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    departmentObserver.observe(card);
});
