export function initScrollProgress() {
  const bar = document.querySelector(".progress__bar");
  if (!bar) return;

  let ticking = false;

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    bar.style.width = `${Math.min(1, Math.max(0, progress)) * 100}%`;
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}
