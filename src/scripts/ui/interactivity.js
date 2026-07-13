import { REDUCED_MOTION } from "../aurora/constants.js";

export function initInteractivePanels() {
  if (REDUCED_MOTION) return;

  const panels = document.querySelectorAll(".panel-tilt");

  panels.forEach((panel) => {
    panel.addEventListener(
      "pointermove",
      (event) => {
        const bounds = panel.getBoundingClientRect();
        const percentX = (event.clientX - bounds.left) / bounds.width;
        const percentY = (event.clientY - bounds.top) / bounds.height;

        const rotateY = (percentX - 0.5) * 2.2;
        const rotateX = (0.5 - percentY) * 2.2;

        panel.style.setProperty("--pointer-x", `${percentX * 100}%`);
        panel.style.setProperty("--pointer-y", `${percentY * 100}%`);
        panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      },
      { passive: true }
    );

    panel.addEventListener("pointerleave", () => {
      panel.style.transform = "";
    });
  });
}

export function initTechTagInteraction() {
  const tags = document.querySelectorAll(".tech-tag");

  tags.forEach((tag) => {
    tag.addEventListener("pointerenter", () => tag.classList.add("is-active"));
    tag.addEventListener("pointerleave", () => tag.classList.remove("is-active"));
  });
}
