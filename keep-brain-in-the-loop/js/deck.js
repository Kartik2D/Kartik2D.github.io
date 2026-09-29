(function () {
  const deck = document.getElementById('deck');
  const slides = Array.from(deck.querySelectorAll('.slide'));
  const progNum = document.getElementById('prog-num');
  const progTotal = document.getElementById('prog-total');
  let i = 0;
  const total = slides.length;
  progTotal.textContent = String(total);

  function show(n) {
    i = Math.max(0, Math.min(total - 1, n));
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    progNum.textContent = String(i + 1);
    try {
      history.replaceState(null, '', '#' + (i + 1));
    } catch (_) {}
  }

  function next() { show(i + 1); }
  function prev() { show(i - 1); }

  function isInteractiveTarget(t) {
    return !!(t && t.closest && t.closest('a, button, input, textarea, select, iframe, [data-stop-nav]'));
  }

  deck.addEventListener('click', (e) => {
    if (isInteractiveTarget(e.target)) return;
    next();
  });

  document.addEventListener('keydown', (e) => {
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    const k = e.key;
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown' || k === 'Enter') {
      e.preventDefault();
      next();
    } else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace') {
      e.preventDefault();
      prev();
    } else if (k === 'Home') {
      e.preventDefault();
      show(0);
    } else if (k === 'End') {
      e.preventDefault();
      show(total - 1);
    } else if (k === 'Escape') {
      show(0);
    }
  });

  let touchX = null;
  let touchY = null;
  deck.addEventListener('touchstart', (e) => {
    const t = e.changedTouches[0];
    touchX = t.clientX;
    touchY = t.clientY;
  }, { passive: true });

  deck.addEventListener('touchend', (e) => {
    if (touchX == null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchX;
    const dy = t.clientY - touchY;
    touchX = touchY = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  }, { passive: true });

  const hash = parseInt((location.hash || '').replace(/\D/g, ''), 10);
  show(hash >= 1 && hash <= total ? hash - 1 : 0);
  deck.focus({ preventScroll: true });
})();
