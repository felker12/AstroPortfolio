export function initScrollIndicator() {
  const indicator = document.getElementById("scroll-indicator");
  const footer = document.getElementById("contact");

  if (!indicator || !footer) {
    console.warn("Scroll indicator or footer could not be found.");
    return;
  }

  let ticking = false;

  function update() {
    const footerBounds = footer.getBoundingClientRect();

    // Hide once any part of the footer enters the viewport.
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