// assets/js/script.js (Shared JS File)
// Helpful comment: Basic JS for form submission alert (placeholder). Expand for more functionality, e.g., add smooth scrolling or animations.

// Contact Form Submission (Placeholder)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent! (This is a placeholder; implement actual submission via Formspree or backend.)');
            form.reset();
        });
    }
});