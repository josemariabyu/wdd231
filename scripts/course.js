// scripts/course.js
const cursos = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const listaCursos = document.getElementById('lista-cursos');
const filtro = document.getElementById('filtro');

function mostrarCursos(filtroTexto = '') {
    listaCursos.innerHTML = '';
    cursos
        .filter(curso => curso.toLowerCase().includes(filtroTexto.toLowerCase()))
        .forEach(curso => {
            const li = document.createElement('li');
            li.textContent = curso;
            listaCursos.appendChild(li);
        });
}

filtro.addEventListener('input', () => mostrarCursos(filtro.value));
mostrarCursos();
