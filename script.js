const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#mainNav");

const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  scrollTopBtn.hidden = false;
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const isExpanded = nav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", String(isExpanded));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
