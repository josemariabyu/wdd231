// date.js

// Mostrar el año actual automáticamente
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Mostrar la fecha de última modificación del documento
document.getElementById("lastModified").textContent = `Última modificación: ${document.lastModified}`;
