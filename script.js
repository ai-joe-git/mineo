// Animated counter
const unitsLeft = document.getElementById('units-left');
let count = 127;

function updateCounter() {
    if (Math.random() > 0.7 && count > 1) {
        count--;
        unitsLeft.textContent = count;
        
        if (count < 50) {
            unitsLeft.style.color = '#ff3a3a';
        }
    }
}

// Update counter randomly
setInterval(updateCounter, 5000);

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
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
    
    particles.style.transform = `translateY(${scrollY * 0.3}px)`;
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
