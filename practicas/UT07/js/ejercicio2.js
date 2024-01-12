let paginaActual = 1;
let numeroPaginas = 6;
let elementsPorPagina = 10;
let json;
let tabla = document.getElementById('list');
let cargando = document.getElementById('info');
let loading = document.getElementById('loading');

function anadirElementos (element) {
    tabla.innerHTML+=`
        <tr>
            <td>${element.name}</td>
            <td>${element.climate}</td>
            <td>${element.gravity}</td>
            <td>${element.terrain}</td>
        </tr>
    `;
}

function arreglar () {
    tabla.innerHTML=`
        <tr>
            <th>Nombre</th>
            <th>Clima</th>
            <th>Gravedad</th>
            <th>Terreno</th>
        </tr>
    `;
}

function conseguirDatos() {
    loading.classList.remove("hidden");
    fetch( `https://swapi.dev/api/planets/?page=${paginaActual}` )
        .then( response => response.json() )
        .then( data =>  {
                loading.classList.add("hidden");
                data.results.forEach(element => anadirElementos(element))
            }
        )
    }
conseguirDatos();

document.getElementById("anterior").addEventListener('click', ()=>{
    paginaActual = (paginaActual > 0) ? paginaActual - 1 : paginaActual;
    document.getElementById("paginaActual").textContent = `Página ${paginaActual} de ${numeroPaginas}`;
    arreglar();
    conseguirDatos();
  })

document.getElementById("paginaActual").textContent = `Página ${paginaActual} de ${numeroPaginas}`;

document.getElementById("siguiente").addEventListener('click', ()=>{
    paginaActual = (paginaActual < numeroPaginas - 1) ? paginaActual + 1 : paginaActual;
    document.getElementById("paginaActual").textContent = `Página ${paginaActual} de ${numeroPaginas}`;
    arreglar();
    conseguirDatos();
  });