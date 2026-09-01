// script.js – simple family greeting & interactive feel

document.addEventListener('DOMContentLoaded', function () {
  console.log('🌸 Family Roots — welcome home!');

  // highlight active nav link (already handled by .active class)
  // but we add a tiny dynamic effect to the hero greeting
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    heroTitle.addEventListener('mouseenter', function () {
      this.style.transition = 'color 0.2s';
      this.style.color = '#d4a373';
    });
    heroTitle.addEventListener('mouseleave', function () {
      this.style.color = '#1f3a44';
    });
  }

  // Add a small 'family fact' – could be expanded later
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.addEventListener('click', function () {
      // gentle feedback: a tiny pulse
      this.style.transform = 'scale(0.97)';
      setTimeout(() => { this.style.transform = ''; }, 150);
    });
  });

  // Optional: footer year auto-update (though we hardcode 2026)
  const footerYear = document.querySelector('footer p');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    // only update if the text contains '2026' – keep it simple
    if (footerYear.innerHTML.includes('2026')) {
      footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
    }
  }
});
