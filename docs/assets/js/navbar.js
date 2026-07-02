/* ================================================
   navbar.js — Sticky nav · Burger · Active links
   ================================================ */

// Force page to always start at the top, disable browser scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

let navbarInitialized = false;

function initNavbar() {
  if (navbarInitialized) return; // prevent double-binding if called twice
  navbarInitialized = true;

  const navbar   = document.getElementById('navbar');
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  if (!navbar || !burger || !navLinks) {
    console.error('[navbar.js] Missing element(s):', { navbar, burger, navLinks });
    return;
  }

  // Sticky background
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 20
      ? 'rgba(10,14,26,0.98)'
      : 'rgba(10,14,26,0.85)';
  });

  // Burger toggle
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Highlight active section
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof applyLanguage === 'function') {
        applyLanguage(btn.getAttribute('data-lang'));
      } else {
        console.error('[navbar.js] applyLanguage() is not defined — check that i18n.js loaded before navbar.js');
      }
    });
  });
}

// Self-initialize once the DOM is ready.
// If main.js also calls initNavbar()/initLangSwitcher(), the guard above
// prevents duplicate event bindings for the burger.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLangSwitcher();
  });
} else {
  // DOM already parsed (script loaded late) — run immediately
  initNavbar();
  initLangSwitcher();
}