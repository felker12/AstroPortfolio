export function initScrollIndicator() {
  const indicator = document.getElementById("scroll-indicator");
  const footer = document.getElementById("contact");

  if (!indicator) {
    console.warn("Scroll indicator could not be found.");
  }

  if (!footer) {
    console.warn("Footer with id='contact' could not be found.");
  }

  if (!indicator || !footer) return;

  let ticking = false;

  function update() {
    const footerBounds = footer.getBoundingClientRect();

    const footerIsVisible =
      footerBounds.top < window.innerHeight &&
      footerBounds.bottom > 0;

    indicator.style.opacity = footerIsVisible ? "0" : "1";
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener("scroll", requestUpdate, {
    passive: true,
  });

  window.addEventListener("resize", requestUpdate);

  update();
}