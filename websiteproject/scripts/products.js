import { getProducts } from './storage.js';
const productsGrid = document.getElementById('products-grid');
const template = document.getElementById('product-card-template');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const searchInput = document.getElementById('search');
const viewToggle = document.getElementById('view-toggle');

let products = [];

async function fetchProducts(){
  try{
    const resp = await fetch('data/products.json');
    if(!resp.ok) throw new Error('Network response not ok');
    products = await resp.json();
    render(products);
    // save to localStorage for offline preference
    localStorage.setItem('products_cached', JSON.stringify(products));
  }catch(err){
    console.error(err);
    // try load from cache
    const cached = localStorage.getItem('products_cached');
    if(cached) products = JSON.parse(cached);
    render(products);
  }
}

function render(list){
  const container = document.getElementById('products-grid') || document.getElementById('featured-grid');
  if(!container) return;
  container.innerHTML = '';
  list.forEach(item => {
    const node = template.content.cloneNode(true);
    node.querySelector('.product-image').src = item.image;
    node.querySelector('.product-image').alt = item.title;
    node.querySelector('.product-title').textContent = item.title;
    node.querySelector('.product-desc').textContent = item.summary;
    node.querySelector('.product-meta').textContent = item.category + ' • $' + item.price;
    const btn = node.querySelector('.details-btn');
    btn.addEventListener('click', ()=> openModal(item));
    container.appendChild(node);
  });
}

function openModal(item){
  if(!modal) return;
  modal.setAttribute('aria-hidden','false');
  modalTitle.textContent = item.title;
  modalBody.innerHTML = `<p>${item.long}</p><p><strong>Price:</strong> $${item.price}</p>`;
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  if(!modal) return;
  modal.setAttribute('aria-hidden','true');
  modalTitle.textContent = '';
  modalBody.innerHTML = '';
  document.body.style.overflow = '';
}

modalClose && modalClose.addEventListener('click', closeModal);
modal && modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });

searchInput && searchInput.addEventListener('input', (e)=>{
  const q = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  render(filtered);
});

viewToggle && viewToggle.addEventListener('click', ()=>{
  const grid = document.getElementById('products-grid');
  if(grid) grid.classList.toggle('list');
});

export { fetchProducts as loadProducts };

// Auto-run fetch when module loads
fetchProducts();

