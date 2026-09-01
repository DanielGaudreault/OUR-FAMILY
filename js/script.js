// ===== script.js – smooth interactions =====

document.addEventListener('DOMContentLoaded', function () {

    // Hero icon bounce (already animated via CSS, but we add extra)
    const heroIcon = document.querySelector('.hero-icon i');
    if (heroIcon) {
        heroIcon.addEventListener('mouseenter', () => {
            heroIcon.style.transform = 'scale(1.2) rotate(5deg)';
            heroIcon.style.transition = '0.3s';
        });
        heroIcon.addEventListener('mouseleave', () => {
            heroIcon.style.transform = '';
        });
    }

    // Card click feedback
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.97)';
            setTimeout(() => this.style.transform = '', 180);
        });
    });

    // Update footer year dynamically
    const footerYear = document.querySelector('.footer-content p');
    if (footerYear) {
        const year = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2026', year);
    }

    console.log('🌳 Family Roots — vibrant edition loaded!');
});
