// scripts/navigation.js
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (menu.classList.contains("hidden")) {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
});
