// scripts/spotlights.js

async function loadSpotlights() {
  const container = document.getElementById("spotlight-container");
  if (!container) return;

  try {
    const resp = await fetch("data/members.json");
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    const members = await resp.json();

    // Convertir números a niveles
    const levelMap = {
      1: "bronze",
      2: "silver",
      3: "gold"
    };

    // Filtrar Gold y Silver
    const premium = members.filter(m => {
      const lvl = levelMap[m.membership];
      return lvl === "gold" || lvl === "silver";
    });

    if (premium.length === 0) {
      container.innerHTML = "<p>No hay miembros Gold o Silver disponibles.</p>";
      return;
    }

    // Shuffle
    function shuffle(array) {
      const a = array.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    const shuffled = shuffle(premium);

    // Seleccionar 2–3 aleatorios
    const count = Math.min(3, Math.max(2, Math.floor(Math.random() * 3) + 1));
    const selected = shuffled.slice(0, count);

    // Renderizar
    container.innerHTML = "";
    selected.forEach(member => {
      const img = member.image ? `images/members/${member.image}` : "images/logo-placeholder.png";
      const levelName = levelMap[member.membership];

      const card = document.createElement("article");
      card.className = "spotlight-card";

      card.innerHTML = `
        <img src="${img}" alt="${member.name} logo" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank" rel="noopener">Visitar sitio</a></p>
        <p class="level">${levelName.toUpperCase()} Member</p>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error loading spotlights:", err);
    container.innerHTML = "<p>Spotlights no disponibles.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadSpotlights);
