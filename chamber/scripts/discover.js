import { places } from "../data/discover.mjs";

// DOM elements
const container = document.getElementById("cards-container");
const visitorMsg = document.getElementById("visitor-message");

// Build cards
function displayCards() {
    places.forEach(place => {
        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.image}" alt="${place.name}" loading="lazy">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button class="learn-btn">Learn More</button>
        `;

        container.appendChild(card);
    });
}

// Visitor message logic
function handleVisits() {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        visitorMsg.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const diff = now - Number(lastVisit);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days < 1) {
            visitorMsg.textContent = "Back so soon! Awesome!";
        } else if (days === 1) {
            visitorMsg.textContent = "You last visited 1 day ago.";
        } else {
            visitorMsg.textContent = `You last visited ${days} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
}

displayCards();
handleVisits();
