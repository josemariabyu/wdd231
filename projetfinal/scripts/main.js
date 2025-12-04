// Responsive menu
const btn = document.querySelector('#menu-btn');
const nav = document.querySelector('#nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Load bikes dynamically
import { loadBikes } from './data.js';
loadBikes();
