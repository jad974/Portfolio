// ===== Portfolio Navigation Manager =====

document.addEventListener('DOMContentLoaded', () => {
    // Set active nav link
    updateActiveNavigation();
    
    // Smooth scroll for anchor links
    setupSmoothScroll();

    // mobile burger menu
    setupNavToggle();
});

// Update active navigation link based on current page
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Toggle responsive menu on mobile
function setupNavToggle() {
    // purely CSS-controlled checkbox menu; add convenience to close on link click
    const checkbox = document.getElementById('nav-check');
    if (checkbox) {
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                // collapse menu after navigation on mobile
                checkbox.checked = false;
            });
        });
    }
}


// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}