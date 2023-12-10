document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add your form submission logic here, e.g., send data to a server
        alert('Form submitted!');
    });
});