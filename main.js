// JavaScript for interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Special case for home page
    if (currentPage === 'index.html' || currentPage === '') {
        const homeLink = document.querySelector('.nav-menu a[href="index.html"]');
        if (homeLink) homeLink.classList.add('active');
    }
});

// Console message (for developers)
console.log('Welcome to Ehdaa Al-Marhabi\'s portfolio website');
console.log('IT, Network & Cybersecurity Analyst');

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'var(--shadow)';
    }
});