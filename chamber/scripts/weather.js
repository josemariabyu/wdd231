// scripts/weather.js

const apiKey = "ca7abfe2545d3c5a1de2aa108d314975"; // 🔑 Reemplazá con tu clave de OpenWeatherMap
const city = "Cordoba,AR";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=es&appid=${apiKey}`;

async function getWeather() {
  try {
    // === CLIMA ACTUAL ===
    const response = await fetch(weatherUrl);
    if (!response.ok) throw new Error("Error al obtener el clima actual");
    const data = await response.json();

    document.getElementById("current-temp").textContent = Math.round(data.main.temp);
    document.getElementById("weather-desc").textContent = data.weather[0].description;

    // === PRONÓSTICO 3 DÍAS ===
    const forecastResponse = await fetch(forecastUrl);
    if (!forecastResponse.ok) throw new Error("Error al obtener el pronóstico");
    const forecastData = await forecastResponse.json();

    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";

    // Toma los próximos 3 días a las 12:00
    const noonForecasts = forecastData.list.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 3);

    noonForecasts.forEach(day => {
      const date = new Date(day.dt * 1000);
      const options = { weekday: "long" };
      const dayName = date.toLocaleDateString("es-ES", options);
      const temp = Math.round(day.main.temp);
      const li = document.createElement("li");
      li.textContent = `${dayName}: ${temp}°C`;
      forecastContainer.appendChild(li);
    });

  } catch (error) {
    console.error("Error obteniendo datos del clima:", error);
    document.getElementById("weather-info").innerHTML = "<p>No se pudo cargar el clima.</p>";
  }
}

getWeather();
