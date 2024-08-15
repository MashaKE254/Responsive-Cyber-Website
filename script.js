document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-links li a');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.reload();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            if (window.innerWidth <= 768) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    hamburger.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!navLinksContainer.contains(e.target) && !hamburger.contains(e.target)) {
            navLinksContainer.classList.remove('active');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinksContainer.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted:', { name, phone, email, message });

        alert('Thank you for your message. We will get back to you soon!');

        contactForm.reset();
    });
});