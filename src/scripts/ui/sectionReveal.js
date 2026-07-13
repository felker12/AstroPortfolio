import { REDUCED_MOTION } from "../aurora/constants.js";

export function initSectionReveal() {
  const targets = document.querySelectorAll(".reveal-target");
  if (!targets.length) return;

  if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((target) => observer.observe(target));
}
