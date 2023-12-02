data = [
    {
        text: 'Primero',
        selected: false
    },
    {
        text: 'Segundo',
        selected: false
    },
    {
        text: 'Tercero',
        selected: false
    },
    {
        text: 'Cuarto',
        selected: false
    },
    {
        text: 'Quinto',
        selected: false
    }
]

function anadirLista () {
    const divList = document.getElementById('list');
    divList.innerHTML= "";
    data.forEach( ({text, selected}) => {
        const divItem = document.createElement('div');
        divItem.addEventListener('click', seleccion);
        divItem.onmousedown = () => false; //quita que se seleccionen las letras
        divItem.textContent = text;
        divItem.classList.add('item');
        if (selected) {
            divItem.classList.add('selected');
        } else {
            divItem.classList.remove('selected');
        }
        divList.append(divItem);
    });
}

anadirLista();

function seleccion (e) {

    if (!e.ctrlKey) {
        data.forEach(item => item.selected = false);
    }

    let elemento = data.find(item => item.text == e.currentTarget.textContent);

    elemento.selected = !elemento.selected;

    anadirLista();
}


/*
    Hecho por Víctor

const data = [
    {
            text: 'primero',
            selected: false,
    },
    {
            text: 'segundo',
            selected: false,
    },
    {
            text: 'tercero',
            selected: false,
    },
    {
            text: 'cuarto',
            selected: false,
    },
    {
            text: 'quinto',
            selected: false,
    },
];

let lastSelected = undefined;

function renderList() {
       const divList = document.getElementById('list');
       divList.innerHTML='';
       data.forEach( ( {text, selected}, index ) => {
              const divItem = document.createElement('div');
              divItem.textContent = text;
              divItem.dataset.id = index;
              divItem.classList.add('item');
              if (selected) {
                     divItem.classList.add(  'selected'  )
              } else {
                     divItem.classList.remove( 'selected' )
              }
              divItem.addEventListener( 'click', handleClickItem )
              divItem.onmousedown = () => false;
              divList.append(divItem);
       })
}

renderList();

// Listeners
function handleClickItem(e) {
       let itemId = e.target.dataset.id;
       if (e.ctrlKey) {
              ctrlClick(itemId);
       } else if (e.shiftKey) {
              shiftClick(itemId);
       } else {
              singleClick(itemId)
       } 
       renderList();
}

function singleClick(itemId) {
       lastSelected = itemId;
       if (data[itemId].selected) {
              data[itemId].selected = false;
       } else {
              data.forEach( item => item.selected = false  );
              data[itemId].selected = true;
       }
}

function ctrlClick(itemId) {
       data[itemId].selected = !data[itemId].selected;
}

function shiftClick(itemId) {
       data.forEach( item => item.selected = false  );
       if (lastSelected) {
              data.forEach( (item, index) => {
                     if ( (index>=Math.min(lastSelected, itemId)) && (index <= Math.max(lastSelected, itemId)) ) {
                            item.selected = true;
                     }
              })
       } else {
              data[itemId].selected = true;
       }
       lastSelected = itemId;
}

*/