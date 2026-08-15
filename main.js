const brandMarks = document.querySelectorAll('.wordmark');
brandMarks.forEach(mark => {
  const isHeaderMark = Boolean(mark.closest('.site-header'));
  const logo = document.createElement('img');
  logo.className = 'brand-logo';
  logo.src = isHeaderMark ? 'assets/qvibe-logo-white.png' : 'assets/qvibe-logo-color.png';
  logo.alt = 'Qvibe Collections';
  logo.width = 809;
  logo.height = 438;
  mark.replaceChildren(logo);
  mark.setAttribute('aria-label', 'Qvibe Collections home');
});

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = 'assets/qvibe-favicon.png';
document.head.append(favicon);

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
