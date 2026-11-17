/* =========================================================
   EMY SWEETS — CONTACT PAGE INTERACTIONS
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
// Preloader
window.addEventListener("load", () => {
    setTimeout(() => document.querySelector(".preloader")?.classList.add("done"), 450);
  });

  // Mobile navigation
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });
  
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }));

  // Smooth reveal for contact details
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
});