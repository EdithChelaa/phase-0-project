document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Display alert
        const alertElement = document.createElement('div');
        alertElement.className = 'alert';
        alertElement.textContent = 'Form submitted!';

        // Append the alert to the contact section
        const contactSection = document.getElementById('contact');
        contactSection.appendChild(alertElement);
    });
});
