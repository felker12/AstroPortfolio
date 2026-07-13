import { REDUCED_MOTION } from "../aurora/constants.js";

export function initNavigationState() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  let ticking = false;

  function update() {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  update();
}

export function initSmoothAnchorLinks() {
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: REDUCED_MOTION ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", targetId);
    });
  });
}
