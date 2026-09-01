// script.js – smooth interactions

document.addEventListener('DOMContentLoaded', function () {
  // Hero title hover
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    heroTitle.addEventListener('mouseenter', () => heroTitle.style.color = '#d4a373');
    heroTitle.addEventListener('mouseleave', () => heroTitle.style.color = '#1f3a44');
  }

  // Card click feedback
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
      this.style.transform = 'scale(0.97)';
      setTimeout(() => this.style.transform = '', 150);
    });
  });

  // Update footer year dynamically
  const footerYear = document.querySelector('.footer-content p');
  if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.textContent = footerYear.textContent.replace('2026', year);
  }

  console.log('🌳 Family Roots — premium edition loaded.');
});
