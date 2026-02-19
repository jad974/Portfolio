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
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    if (toggle && menu) {
        // start collapsed on mobile
        if (window.innerWidth <= 768) {
            menu.classList.add('collapsed');
        }
        // simple click toggle; no hover or mousemove
        toggle.addEventListener('click', () => {
            menu.classList.toggle('collapsed');
        });
        // clicking outside also hides
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && e.target !== toggle) {
                menu.classList.add('collapsed');
            }
        });
        // adjust when resizing window
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                menu.classList.add('collapsed');
            } else {
                menu.classList.remove('collapsed');
            }
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