/* ================================================
   main.js — Entry point: initialise all modules
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage('en');   // i18n.js
  initNavbar();          // navbar.js
  initLangSwitcher();    // navbar.js
  initReveal();          // animations.js
  initSmoothScroll();    // animations.js
  // toggleFAQ()  — called inline via onclick in HTML (faq.js)
  // handleSubmit() — called inline via onsubmit in HTML (form.js)
});