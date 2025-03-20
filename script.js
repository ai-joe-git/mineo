// Animated counter for remaining units
const unitsLeft = document.getElementById('units-left');
let count = 127;

function updateCounter() {
    if (Math.random() > 0.8 && count > 1) {
        count--;
        unitsLeft.textContent = count;
    }
}

// Update counter randomly
setInterval(updateCounter, 10000);

// FAQ toggle functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    // Hide answers initially
    answer.style.display = 'none';
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
            faqItem.querySelector('.faq-answer').style.display = 'none';
        });
        
        // If the clicked item wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
            answer.style.display = 'block';
        }
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Parallax effect for background particles
window.addEventListener('scroll', () => {
    const particles = document.querySelector('.particles');
    const scrollY = window.scrollY;
    
    particles.style.transform = `translateY(${scrollY * 0.1}px)`;
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.glass-card, .spec, .product-image');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.glass-card, .spec, .product-image').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
});

// Listen for scroll to trigger animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission simulation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.innerHTML = 'Processing...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your pre-order! We will contact you shortly with payment details and shipping information.');
            contactForm.reset();
            submitButton.innerHTML = 'Complete Pre-order';
            submitButton.disabled = false;
        }, 2000);
    });
}
