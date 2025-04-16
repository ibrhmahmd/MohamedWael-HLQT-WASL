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
