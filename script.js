// Animated counter for remaining units
const unitsLeft = document.getElementById('units-left');
let count = 127;

function updateCounter() {
    if (Math.random() > 0.7 && count > 1) {
        count--;
        unitsLeft.textContent = count;
        
        if (count < 50) {
            unitsLeft.style.color = '#ff3a3a';
        }
        
        if (count < 20) {
            document.querySelector('.counter').innerHTML += ' <span class="urgent-tag">Almost gone!</span>';
            document.querySelector('.urgent-tag').style.color = '#ff3a3a';
            document.querySelector('.urgent-tag').style.fontWeight = 'bold';
        }
    }
}

// Update counter randomly
setInterval(updateCounter, 5000);

// Animated success counters
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    const minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    
    stepTime = Math.max(stepTime, minTimer);
    
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    let timer;
    
    function run() {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}

// Animate success counters when in view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateValue('blocks-found', 0, 147, 3000);
            setTimeout(() => {
                document.getElementById('total-rewards').innerHTML = '$62M+';
            }, 1000);
            setTimeout(() => {
                document.getElementById('fastest-win').innerHTML = '9';
            }, 2000);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const countersSection = document.querySelector('.success-tracker');
if (countersSection) {
    observer.observe(countersSection);
}

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

// Update current Bitcoin price (simulated)
function updateBitcoinPrice() {
    const prices = [
        "$240,500", "$238,200", "$236,800", "$239,500", "$235,900"
    ];
    const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    document.querySelector('.jackpot-amount').innerHTML = `3.125 BTC ≈ ${randomPrice}`;
}

// Update Bitcoin price every 30 seconds
setInterval(updateBitcoinPrice, 30000);

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

// Automatic testimonial slider
const testimonialSlider = document.querySelector('.testimonials-slider');
let scrollAmount = 0;
const slideWidth = 380; // Width of slide + gap

function autoSlide() {
    scrollAmount += slideWidth;
    if (scrollAmount >= testimonialSlider.scrollWidth - testimonialSlider.clientWidth) {
        scrollAmount = 0;
    }
    
    testimonialSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Auto slide every 5 seconds
setInterval(autoSlide, 5000);

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
            alert('Thank you for your interest in MINEO! A mining specialist will contact you shortly to secure your order.');
            contactForm.reset();
            submitButton.innerHTML = 'Start Your Mining Journey Today!';
            submitButton.disabled = false;
        }, 2000);
    });
}
