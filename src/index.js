const btn = document.querySelector(".dropdown-btn");

const menu = document.querySelector(".dropdown-menu-content");

btn.addEventListener("click", () => {
  menu.classList.toggle("visible");
});
