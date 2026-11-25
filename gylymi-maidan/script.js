// Мобильное меню (контент сайта от JavaScript не зависит)
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
if (burger && menu) {
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
}
