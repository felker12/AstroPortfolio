export function initCurrentYear() {
  const elements = document.querySelectorAll("[data-current-year]");
  const year = String(new Date().getFullYear());
  elements.forEach((el) => (el.textContent = year));
}

export function initPageVisibility() {
  document.addEventListener("visibilitychange", () => {
    document.body.classList.toggle("page-hidden", document.hidden);
  });
}
