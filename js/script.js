// script.js – subtle interactions

document.addEventListener('DOMContentLoaded', function () {
  console.log('🌳 Family Roots — enhanced.');

  // hero title colour shift
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    heroTitle.addEventListener('mouseenter', function () {
      this.style.transition = 'color 0.25s';
      this.style.color = '#d4a373';
    });
    heroTitle.addEventListener('mouseleave', function () {
      this.style.color = '#1f3a44';
    });
  }

  // card pulse on click
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', function () {
      this.style.transform = 'scale(0.97)';
      setTimeout(() => { this.style.transform = ''; }, 150);
    });
  });

  // update footer year
  const footerYear = document.querySelector('footer p');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    if (footerYear.innerHTML.includes('2026')) {
      footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
    }
  }
});
