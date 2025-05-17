document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members");

    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error cargando los datos:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = ""; // Limpiar contenido previo
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");
            card.innerHTML = `
                <img src="${member.image}" alt="Logo de ${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visitar sitio web</a>
                <p class="membership-level">Nivel: ${getMembershipLevel(member.membership)}</p>
            `;
            membersContainer.appendChild(card);
        });
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 3: return "Oro";
            case 2: return "Plata";
            case 1: return "Miembro";
            default: return "Desconocido";
        }
    }

    loadMembers();
});
