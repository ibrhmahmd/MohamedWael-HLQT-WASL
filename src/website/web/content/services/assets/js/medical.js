document.addEventListener('DOMContentLoaded', () => {
    const showDoctorFormBtn = document.getElementById('showDoctorFormBtn');
    let formCreated = false;
    let formElement = null;

    function createDoctorForm() {
        if (formCreated) return;

        const form = document.createElement('div');
        form.className = 'doctor-appointment-form';
        form.innerHTML = `
            <button class="close-form">&times;</button>
            <form id="appointmentForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="date">Preferred Date</label>
                        <input type="date" id="date" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="time">Preferred Time</label>
                        <input type="time" id="time" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group full-width">
                        <label for="symptoms">Symptoms or Reason for Visit</label>
                        <textarea id="symptoms" required></textarea>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group full-width">
                        <button type="submit">Book Appointment</button>
                    </div>
                </div>
            </form>
        `;

        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        document.body.appendChild(overlay);
        document.body.appendChild(form);

        formElement = form;
        formCreated = true;

        // Add event listener to close form when clicking overlay
        overlay.addEventListener('click', closeForm);

        // Add event listener for close button
        form.querySelector('.close-form').addEventListener('click', closeForm);

        // Add event listener for form submission
        form.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();

            // Hide the form but keep the overlay
            formElement.classList.remove('active');

            // Create and show success alert
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success';
            alertDiv.innerHTML = `
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <button type="button" class="fa-close-button" data-bs-dismiss="alert" aria-label="Close">
      <i class="fas fa-times"></i>
    </button>
    <strong><i class="fas fa-check-circle"></i> Your Message was sent successfully</strong>
    <hr>
    <p>We will send you someone who will examine and treat you at the time you have chosen, <strong>JUST BE PATIENT!!</strong></p>
  </div>
            `;

            // Add alert to the overlay
            overlay.appendChild(alertDiv);

            // Show alert with animation
            setTimeout(() => {
                alertDiv.classList.add('show');
            }, 10);

            // Add event listener to close alert
            alertDiv.querySelector('.alert-close').addEventListener('click', () => {
                alertDiv.classList.remove('show');
                setTimeout(() => {
                    overlay.classList.remove('active');
                    alertDiv.remove();
                }, 300);
            });
        });
    }

    function closeForm() {
        formElement.classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    }

    function showForm() {
        if (!formCreated) {
            createDoctorForm();
        }

        // Show the overlay first
        document.querySelector('.overlay').classList.add('active');

        // Add a small delay before showing the form to ensure the transition works
        setTimeout(() => {
            formElement.classList.add('active');
        }, 10);
    }

    showDoctorFormBtn.addEventListener('click', showForm);
});
