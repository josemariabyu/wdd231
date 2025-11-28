import { places } from "../data/discover.mjs";

const container = document.querySelector("#cards-container");
const visitorMsg = document.querySelector("#visitor-message");

// ------------------------
// LOAD CARDS
// ------------------------
places.forEach(place => {
    const card = document.createElement("section");
    card.classList.add("discover-card");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    container.appendChild(card);
});

// ------------------------
// LAST VISIT MESSAGE
// ------------------------
const today = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    visitorMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = today - lastVisit;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        visitorMsg.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        visitorMsg.textContent = "You last visited 1 day ago.";
    } else {
        visitorMsg.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", today);
