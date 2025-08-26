// assets/js/script.js (Enhanced JS File)
// Helpful comment: Enhanced JS with form handling and fade-in animations. Expand for more interactivity. GitHub: https://github.com/EarnestAxis5546

document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission (Placeholder)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent! (Placeholder: Use Formspree or a backend for actual submission.)');
            form.reset();
        });
    }

    // Fade-in Animation for Sections
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200); // Staggered animation
    });
});