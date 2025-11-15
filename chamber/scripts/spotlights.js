// scripts/spotlights.js

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Filtrar solo los miembros con nivel Gold o Silver
    const premium = data.members.filter(member =>
      member.membership === "Gold" || member.membership === "Silver"
    );

    // Mezclar aleatoriamente y tomar 2 o 3
    const shuffled = premium.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3); // puedes cambiar a 2 si preferís solo dos

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <img src="images/members/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
        <p class="level">${member.membership} Member</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Spotlights error:", error);
    const container = document.getElementById("spotlight-container");
    container.textContent = "Member spotlight information currently unavailable.";
  }
}

loadSpotlights();
