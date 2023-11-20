/*
let arr = [];

document.getElementById('add-button')
        .addEventListener( 'click', () => {
            if (document.getElementById('input-text').value != null) {

            } else {
                let objeto = {
                    task: document.getElementById('input-text').value,
                    id: aleatorio ()
                }
    
                arr.push(objeto);
                document.getElementById('input-text').value = "";
    
                let ul = document.querySelector('ul'); //se hace pq te devuelve directamente el ul
                let li = document.createElement('li');
                let boton = document.createElement('button');
    
                for (let key of arr) {
                    boton.textContent = "Borrar";
                    boton.dataset.id = key.id;
                    boton.classList.add('btn');
                    li.classList.add('todo');
                    li.textContent = key.task;
                    li.append(boton);
                    ul.append(li);
                }
            }  
        });

function handleClick(e) {
    return e.currentTarget.dataset.id; //devuelve el nodo en el que he hecho click;
}

arr.forEach(element => {
    document.getElementById(element.id)
            .addEventListener( 'click', handleClick);
            console.log(element.id);
});



function aleatorio () {
    let resultado = "";
    resultado += Math.trunc(Math.random()*10);
    resultado += Math.trunc(Math.random()*10);
    resultado += Math.trunc(Math.random()*10);
    resultado += Math.trunc(Math.random()*10);

    return resultado;
}
*/

   //Corrección de Víctor

// Variables globales
let todos = [];

// Funciones handlers
function handleAddClick( e ) {
       let txt = document
                            .getElementById('input-text')
                            .value
                            .trim();
       document
              .getElementById('input-text')
              .value = '';
       if (txt) todos.push({
              task: txt,
              id: Math.trunc(Math.random()*(36**4)).toString(36).padStart(4, '0'),
       });
       renderTodoList();
}

function handleEraseClick( e ) {
       let eraseId = e.currentTarget.dataset.id;
       todos = todos.filter( ({ id }) => !(eraseId==id));
       renderTodoList();
}

// Funciones render
function renderTodoList () {
       let ulList = document.querySelector('#todos ul');
       ulList.innerHTML = '';

       todos.forEach( ( {task, id} ) => {
              let liTodo = document.createElement('li');
              let spanBorrar =document.createElement('span');
              liTodo.classList.add('todo');
              liTodo.textContent = task;
              spanBorrar.classList.add('btn');
              spanBorrar.textContent = 'Borrar';
              spanBorrar.dataset.id = id;
              spanBorrar.addEventListener( 'click', handleEraseClick );
              liTodo.append(spanBorrar);
              ulList.append(liTodo);
              
              // ulList.innerHTML += `<li class="todo">${todoText}</li`;
       })
}
// ---
document
       .getElementById('add-button')
       .addEventListener( 'click', handleAddClick );