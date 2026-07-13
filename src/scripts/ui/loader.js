import { REDUCED_MOTION } from "../aurora/constants.js";

const STATUS_MESSAGES = [
  "Initializing portfolio",
  "Loading interface",
  "Connecting data nodes",
  "Preparing experience",
  "System ready",
];

export function initLoader() {
  const loader = document.querySelector(".loader");
  const fill = document.querySelector(".loader__bar-fill");
  const pct = document.querySelector(".loader__pct");
  const status = document.querySelector(".loader__status");

  if (!loader) return;

  if (REDUCED_MOTION) {
    if (fill) fill.style.width = "100%";
    if (pct) pct.textContent = "100%";
    if (status) status.textContent = "System ready";

    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      document.body.classList.add("page-ready");

      window.setTimeout(() => {
        loader.remove();
      }, 750);
    }, 100);

    return;
  }

  let progress = 0;
  let statusIndex = 0;

  function tick() {
    const remaining = 100 - progress;
    const increment = remaining > 35 ? Math.random() * 12 + 4 : Math.random() * 5 + 1;
    progress = Math.min(100, progress + increment);

    if (fill) fill.style.width = `${progress}%`;
    if (pct) pct.textContent = `${Math.floor(progress)}%`;

    const nextIndex = Math.min(
      STATUS_MESSAGES.length - 1,
      Math.floor((progress / 100) * STATUS_MESSAGES.length)
    );
    if (status && nextIndex !== statusIndex) {
      statusIndex = nextIndex;
      status.textContent = STATUS_MESSAGES[statusIndex];
    }

    if (progress >= 100) {
      if (status) status.textContent = "System ready";
      window.setTimeout(() => {
        loader.classList.add("is-hidden");
        document.body.classList.add("page-ready");
        window.setTimeout(() => loader.remove(), 750);
      }, 250);
      return;
    }

    const delay = progress < 75 ? Math.random() * 90 + 70 : Math.random() * 70 + 40;
    window.setTimeout(tick, delay);
  }

  window.setTimeout(tick, 120);
}
