let lista = [];

let ulLista = document.getElementById('lista');

let lis = document.querySelectorAll('li');

lis.forEach(li => {
    li.addEventListener('click', seleccion)
})
        
function seleccion (e) {
    lis.forEach(li => {
        li.classList.remove('seleccionado');
    })
    
    e.target.classList.contains('seleccionado') ? e.target.classList.remove('seleccionado') : e.target.classList.add('seleccionado');
}
