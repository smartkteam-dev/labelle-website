// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');
if (toggle && menu) {
  // Inject close (×) button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'mobile-close';
  closeBtn.setAttribute('aria-label', 'Close menu');
  closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  menu.insertBefore(closeBtn, menu.firstChild);

  const closeMenu = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  closeBtn.addEventListener('click', closeMenu);
}

// Contact form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const status = document.getElementById('form-status');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      if (res.ok) {
        status.textContent = "Message sent! We'll be in touch shortly.";
        status.className = 'form-status success';
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = 'Something went wrong. Please call us at 425-329-9520.';
      status.className = 'form-status error';
    }
    btn.disabled = false;
    btn.textContent = 'Send Message';
  });
}
