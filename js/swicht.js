let toggle=document.getElementById('toggle');
toggle.addEventListener('change', (event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark');
    // Selecciona los elementos adicionales con la clase 'dark-element'
  let elements = document.querySelectorAll('.element');
  elements.forEach((element) => {
    if (checked) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  });
})
