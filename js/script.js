// Scroll reveal — one gentle entrance per section, no repeated per-card animation spam
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));

// Contact form — submits to Formspree without leaving the page.
// Replace the form's action="https://formspree.io/f/YOUR_FORM_ID" in index.html
// with your own endpoint from https://formspree.io before this will actually send email.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    status.textContent = 'Sending...';
    status.className = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        status.textContent = 'Message sent — thanks, I\'ll get back to you soon.';
        status.className = 'success';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try again or email directly.';
        status.className = 'error';
      }
    } catch (err) {
      status.textContent = 'Something went wrong. Please try again or email directly.';
      status.className = 'error';
    } finally {
      submitBtn.disabled = false;
    }
  });
}
