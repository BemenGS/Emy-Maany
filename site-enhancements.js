/* Emy Maany site enhancements — English-only */
(() => {
  'use strict';
  // Always keep the site in its original English presentation.
  document.documentElement.lang = 'en';
  document.documentElement.dir = 'ltr';
  document.body.classList.remove('is-arabic');

  // Keep the installed Android PWA in portrait orientation where supported.
  // Browsers may reject runtime locking in a normal tab; the manifest setting
  // is the primary orientation preference for the installed app.
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    window.navigator.standalone === true;
  const lockPortrait = () => {
    if (isStandalone && screen.orientation && typeof screen.orientation.lock === 'function') {
      screen.orientation.lock('portrait-primary').catch(() => {
        // The manifest orientation remains the fallback for supported PWAs.
      });
    }
  };
  lockPortrait();
  window.addEventListener('pageshow', lockPortrait);
  try { localStorage.removeItem('emy-maany-language'); } catch (_) {}

  // Reading progress and back-to-top controls.
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.innerHTML = '<span></span>';
  document.body.appendChild(progress);

  const top = document.createElement('button');
  top.className = 'back-to-top';
  top.type = 'button';
  top.textContent = '↑';
  top.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(top);
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.firstElementChild.style.width = `${max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0}%`;
    top.classList.toggle('is-visible', window.scrollY > 350);
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  // Animated experience counters.
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const decimals = Number(el.dataset.decimals || 0);
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - start) / 1500);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * ease).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    }), { threshold: 0.45 });
    counters.forEach(el => io.observe(el));
  }
})();
