// Datos de los cursos (podés también cargarlos desde un JSON si preferís)
const coursesData = [
  { code: "WDD 110", name: "Web Foundations", credits: 3, category: "WDD" },
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, category: "WDD" },
  { code: "CSE 110", name: "Programming Basics", credits: 3, category: "CSE" },
  { code: "CSE 210", name: "Software Design", credits: 3, category: "CSE" }
];

function renderCourses(filtered = 'all') {
  const container = document.getElementById('courses');
  const totalCredits = document.getElementById('totalCredits');
  container.innerHTML = '';

  let filteredCourses = filtered === 'all'
    ? coursesData
    : coursesData.filter(course => course.category === filtered);

  let total = 0;

  filteredCourses.forEach(course => {
    total += course.credits;

    const card = document.createElement('div');
    card.classList.add('course-card', course.category);

    const title = document.createElement('h3');
    title.textContent = course.code;

    const description = document.createElement('p');
    description.textContent = course.name;

    card.appendChild(title);
    card.appendChild(description);
    container.appendChild(card);
  });

  totalCredits.textContent = total;
}

// Función llamada por los botones
function filterCourses(category) {
  renderCourses(category);
}

// Render por defecto al cargar
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
});
