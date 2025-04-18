// Change hero service name dynamically
const serviceNameSpan = document.querySelector('.hero .content .span-service-name');
const services = ["fast delivery", "building solutions", "skilled workers", "mechanic services", "medical assistance", "internet support"];
let serviceIndex = 0;

function changeServiceName() {
    if (serviceNameSpan) {
        serviceNameSpan.textContent = services[serviceIndex];
        serviceIndex = (serviceIndex + 1) % services.length;
    }
}

setInterval(changeServiceName, 3000); // Change service name every 3 seconds

document.addEventListener('DOMContentLoaded', function() {
    const serviceNames = ['Construction', 'Renovation', 'Maintenance'];
    let currentIndex = 0;
    const serviceNameElement = document.querySelector('.service-name');

    function changeServiceName() {
        serviceNameElement.textContent = serviceNames[currentIndex];
        currentIndex = (currentIndex + 1) % serviceNames.length;
        serviceNameElement.style.animation = 'none';
        void serviceNameElement.offsetWidth;
        serviceNameElement.style.animation = 'fadeIn 1s ease-in-out';
    }

    setInterval(changeServiceName, 3000);
});
