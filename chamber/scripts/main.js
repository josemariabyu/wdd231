// scripts/main.js

// === MENÚ RESPONSIVE ===
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  menuBtn.classList.toggle("open");
});

// === AÑO AUTOMÁTICO Y FECHA DE MODIFICACIÓN ===
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
