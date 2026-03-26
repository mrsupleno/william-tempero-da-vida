// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Fade-up
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.sobre__grid, .musica-card, .poema-card, .cta-final__inner').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Cards músicas → link YouTube
const ytBase = 'https://www.youtube.com/@MUSICASPOEMASTEMPERODAVIDA';
document.querySelectorAll('.musica-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => window.open(ytBase, '_blank'));
});
