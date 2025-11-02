// navigation.js

// Espera a que el documento esté listo
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#menu");

  // Cuando se hace clic en el botón hamburguesa, alterna la visibilidad del menú
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");

    // Cambia el texto del botón para accesibilidad
    const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
    menuToggle.setAttribute("aria-expanded", !expanded);
  });
});
