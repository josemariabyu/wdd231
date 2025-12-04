export async function loadBikes() {
  const container = document.querySelector('#dynamic-bikes');
  if (!container) return;

  try {
    const resp = await fetch('../data/bikes.json');
    if (!resp.ok) throw new Error('Error al cargar los datos');

    const bikes = await resp.json();

    bikes.slice(0, 15).forEach(bike => {
      const card = document.createElement('article');
      card.innerHTML = `
        <img src="images/bikes/${bike.image}" alt="${bike.name}" loading="lazy">
        <h3>${bike.name}</h3>
        <p>${bike.type}</p>
        <p>Autonomía: ${bike.range} km</p>
      `;
      container.appendChild(card);
    });

  } catch (err) {
    console.error(err);
  }
}
