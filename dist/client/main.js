const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.addEventListener('click', event => {
  if (event.target.matches('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

const corridor = document.querySelector('.corridor');
if (corridor && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) {
      corridor.classList.add('in-view');
      observer.disconnect();
    }
  }, { threshold: .35 }).observe(corridor);
} else if (corridor) corridor.classList.add('in-view');
