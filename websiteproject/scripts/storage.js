export async function getProducts(){
  try{
    const r = await fetch('data/products.json');
    return await r.json();
  }catch(e){
    const cached = localStorage.getItem('products_cached');
    return cached ? JSON.parse(cached) : [];
  }
}

