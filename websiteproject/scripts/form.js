const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    // simple validation handoff - let HTML handle required attrs
    // could add extra JS validation here
    // store name in localStorage as example of persistence
    const name = document.getElementById('name').value;
    try{ localStorage.setItem('last_contact_name', name); }catch(e){}
  });
}

