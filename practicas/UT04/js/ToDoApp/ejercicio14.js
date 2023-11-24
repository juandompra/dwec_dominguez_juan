let products = [
    {
      id: '1000',
      product: 'Fresas de Huelva',
      price: 410,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
      id: '1001',
      product: 'Kiwi amarillo',
      price: 245,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
      id: '1002',
      product: 'Manzana roja',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
      id: '1003',
      product: 'Manzana verde',
      price: 170,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
      id: '1004',
      product: 'Melón',
      price: 135,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
      id: '1005',
      product: 'Naranja valenciana',
      price: 160,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
      id: '1006',
      product: 'Pera conferencia',
      price: 210,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
      id: '1007',
      product: 'Plátano',
      price: 260,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
      id: '1008',
      product: 'Sandía',
      price: 115,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
      id: '1009',
      product: 'Uva',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
      id: '1010',
      product: 'Aguacate',
      price: 415,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
      id: '1011',
      product: 'Cereza del Bierzo',
      price: 520,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
      id: '1012',
      product: 'Granada',
      price: 310,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
      id: '1013',
      product: 'Limón',
      price: 155,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
      id: '1014',
      product: 'Nectarina',
      price: 180,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
      id: '1015',
      product: 'Piña',
      price: 320,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },
  
]

let paginaActual = 0;
let elementsPorPagina = 6;
let totalPag = 3;

function mostrarDatos() {
    let elementos = document.getElementById('products-section');
    elementos.innerHTML='';
    products
        .filter ( (item, index) => Math.trunc(index/elementsPorPagina) == paginaActual)
        .forEach(({image, price, product}) =>{
        elementos.innerHTML += `
            <div class="product">
                <img src="${image}" alt="${image}" class="product-foto">
                <div class="product-data">
                    <div class = "fruit-name">${product}</div>
                    <div class = "price">${(price/100).toFixed(2)}/KG</div>
                    <div class = "btn btn-add-product" id="${product}">Añadir</div>
                </div>
            </div>
        `
    });
}

document.getElementById("anterior").addEventListener('click', ()=>{
    paginaActual = (paginaActual > 0) ? paginaActual-1 : paginaActual;
    document.getElementById("paginaActual").textContent = `Página ${paginaActual + 1} de ${totalPag}`;
    mostrarDatos();
  })

document.getElementById("paginaActual").textContent = `Página ${paginaActual + 1} de ${totalPag}`;

document.getElementById("siguiente").addEventListener('click', ()=>{
    paginaActual = (paginaActual < totalPag - 1) ? paginaActual+1 : paginaActual;
    document.getElementById("paginaActual").textContent = `Página ${paginaActual + 1} de ${totalPag}`;
    mostrarDatos();
  });

function accionarBotones () {
    let botones = document.querySelectorAll('.btn-add-product');

    botones.forEach(element => {
        element.addEventListener('click', anadirCarrito)
    });
}

function anadirCarrito ( e ) {
    let elementoActual = e.target.textContent;
    let elementoAAnadir = data.find( ({name})  => name == elementoActual)
    let carrito = document.getElementById("cart-section");
    console.log(elementoActual);
}

mostrarDatos();