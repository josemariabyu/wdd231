// course.js

// Array de cursos
const courses = [
  { code: "WDD 110", name: "Web Foundations", credits: 2, category: "WDD", completed: true },
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, category: "WDD", completed: true },
  { code: "CSE 110", name: "Programming Basics", credits: 2, category: "CSE", completed: false },
  { code: "CSE 210", name: "Software Design", credits: 2, category: "CSE", completed: false }
];

// Selecciona el contenedor de cursos
const coursesContainer = document.getElementById("courses");

// Función para mostrar cursos filtrados
function displayCourses(filteredCourses) {
  coursesContainer.innerHTML = ""; // Limpia contenido previo

  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card", course.category);

    // Estilo distinto si está completado
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p><strong>Créditos:</strong> ${course.credits}</p>
    `;
    coursesContainer.appendChild(card);
  });

  // Calcula y muestra créditos totales
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  const creditsInfo = document.createElement("p");
  creditsInfo.textContent = `Total de créditos mostrados: ${totalCredits}`;
  creditsInfo.classList.add("credits-info");
  coursesContainer.appendChild(creditsInfo);
}

// Función para filtrar por categoría
function filterCourses(category) {
  if (category === "all") {
    displayCourses(courses);
  } else {
    const filtered = courses.filter(course => course.category === category);
    displayCourses(filtered);
  }
}

// Mostrar todos los cursos al cargar la página
document.addEventListener("DOMContentLoaded", () => displayCourses(courses));
