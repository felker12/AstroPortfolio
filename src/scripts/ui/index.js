import { initLoader } from "./loader.js";
import { initScrollProgress } from "./scrollProgress.js";
import { initSectionReveal } from "./sectionReveal.js";
import { initNavigationState, initSmoothAnchorLinks } from "./navigation.js";
import { initInteractivePanels, initTechTagInteraction } from "./interactivity.js";
import { initCurrentYear, initPageVisibility } from "./misc.js";
import { initScrollIndicator } from "./scrollIndicator.js";

export function initUI() {
  initLoader();
  initScrollProgress();
  initSectionReveal();
  initScrollIndicator();
  initNavigationState();
  initSmoothAnchorLinks();
  initInteractivePanels();
  initTechTagInteraction();
  initCurrentYear();
  initPageVisibility();
}
