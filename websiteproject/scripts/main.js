const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav-menu');
menuBtn && menuBtn.addEventListener('click', ()=>{
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  if(nav) {
    if(nav.hasAttribute('hidden')) nav.removeAttribute('hidden');
    else nav.setAttribute('hidden','');
  }
});
// set year in footer
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// load featured products (first 3) from JSON
import { loadProducts } from './products.js';
try{
  loadProducts({target: '#featured-grid', limit: 3});
}catch(e){
  // in case products.js not yet loaded on index context
}

export {};

