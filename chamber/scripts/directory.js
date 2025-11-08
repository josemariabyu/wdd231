document.addEventListener("DOMContentLoaded", () => {

    const membersContainer = document.getElementById("members");

    let membersData = [];

    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            membersData = await response.json();
            displayGrid(membersData); // vista inicial
        } catch (error) {
            console.error("Error cargando los datos:", error);
        }
    }

    // GRID VIEW
    function displayGrid(members) {
        membersContainer.className = "grid";
        membersContainer.innerHTML = "";

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="Logo de ${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visitar sitio web</a>
                <p class="membership-level">Nivel: ${getMembershipLevel(member.membership)}</p>
            `;

            membersContainer.appendChild(card);
        });
    }

    // LIST VIEW
    function displayList(members) {
        membersContainer.className = "list";
        membersContainer.innerHTML = "";

        members.forEach(member => {
            const row = document.createElement("div");
            row.classList.add("member-card");

            row.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address} | ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visitar sitio web</a>
                <p class="membership-level">Nivel: ${getMembershipLevel(member.membership)}</p>
            `;

            membersContainer.appendChild(row);
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

    // Botones GRID / LISTA
    document.getElementById("gridBtn").addEventListener("click", () => {
        displayGrid(membersData);
    });

    document.getElementById("listBtn").addEventListener("click", () => {
        displayList(membersData);
    });

    // Menú hamburguesa
    const menuBtn = document.querySelector("#menu-btn");
    const menu = document.querySelector("#menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    loadMembers();
});
