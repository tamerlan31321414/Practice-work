/* ================================================
   form.js — Contact form with Formspree delivery
   ================================================
   HOW IT WORKS:
   1. Go to https://formspree.io → sign up free
   2. Create a new form → copy your Form ID (looks like "xyzabcde")
   3. In index.html replace YOUR_FORM_ID with that ID
   4. Formspree will email you every submission immediately.
      Free plan: 50 submissions / month.
   ================================================ */

async function handleSubmit(e) {
  e.preventDefault();

  const form    = document.getElementById('contactForm');
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');
  const t       = TRANSLATIONS[currentLang];

  // Hide previous messages
  success.classList.remove('show');
  error.classList.remove('show');

  // Set reply-to from email field
  const emailVal = document.getElementById('femail').value;
  const replyTo  = document.getElementById('replyTo');
  if (replyTo) replyTo.value = emailVal;

  // Loading state
  btn.disabled    = true;
  btn.textContent = '...';

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method:  'POST',
      body:    formData,
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      // ✅ Success
      success.querySelector('[data-i18n="form_success"]').textContent = t.form_success;
      success.classList.add('show');
      form.reset();
      // Hide setup note after first real submission
      const note = document.getElementById('setupNote');
      if (note) note.style.display = 'none';
    } else {
      // Check if it's the placeholder form ID
      const action = form.getAttribute('action');
      if (action.includes('YOUR_FORM_ID')) {
        // Dev mode — simulate success so you can see the UI
        success.querySelector('[data-i18n="form_success"]').textContent =
          '⚠️ Demo mode: replace YOUR_FORM_ID in index.html with your Formspree ID to send real emails.';
        success.classList.add('show');
        form.reset();
      } else {
        throw new Error('Server error');
      }
    }
  } catch (err) {
    const action = form.getAttribute('action');
    if (action.includes('YOUR_FORM_ID')) {
      success.querySelector('[data-i18n="form_success"]').textContent =
        '⚠️ Demo mode: replace YOUR_FORM_ID in index.html with your Formspree ID to send real emails.';
      success.classList.add('show');
      form.reset();
    } else {
      error.querySelector('[data-i18n="form_error"]').textContent = t.form_error;
      error.classList.add('show');
    }
  } finally {
    btn.disabled    = false;
    btn.textContent = t.form_submit;
  }
}