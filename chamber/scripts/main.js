// scripts/main.js

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("menu");

// Solo attach si existen los elementos
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const nowHidden = navMenu.classList.toggle("hidden"); // true si ahora está oculto
    menuBtn.classList.toggle("open");
    // aria-expanded debe reflejar si el menu está abierto (true) o cerrado (false)
    menuBtn.setAttribute("aria-expanded", String(!nowHidden));
  });

  // Al cambiar el tamaño de la ventana, si estamos en desktop garantizamos que el menu esté visible
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 769) {
      // en desktop, remover hidden para asegurar visibilidad
      navMenu.classList.remove("hidden");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      // en móvil dejamos cerrado por defecto
      navMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.classList.remove("open");
    }
  });

  // Ejecutar una vez al cargar para establecer estado inicial correcto
  if (window.innerWidth >= 769) {
    navMenu.classList.remove("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    navMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  }
}
