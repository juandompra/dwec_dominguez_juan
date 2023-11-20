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
              done: false,
       });
       renderTodoList();
}

function handleEraseClick( e ) {
       let eraseId = e.currentTarget.dataset.id;
       todos = todos.filter( ({ id }) => !(eraseId==id));
       renderTodoList();
}

function handleDoneClick ( e ) {
    let doneId = e.currentTarget.dataset.id;
    //Recoger el elemento con id = doneID;
    //id es item.id, pero desestructuramos
    let toDo = todos.find( ({id})  => id == doneId)
    //es un switch, si es vdd, se convierte a falso, si es f se convierte a v
    toDo.done = !toDo.done;
    renderTodoList();
}

// Funciones render
function renderTodoList () {
        let ulList = document.querySelector('#todos ul');
        ulList.innerHTML = '';
        todos.forEach( ( {task, id, done} ) => {
              let liTodo = document.createElement('li');
              let spanBorrar =document.createElement('span');
              let spanDone = document.createElement('span');
              liTodo.classList.add('todo');
              if (done) liTodo.classList.add('done');
              liTodo.textContent = task;
              
              //boton borrar
              spanBorrar.classList.add('btn');
              spanBorrar.textContent = 'Borrar';
              spanBorrar.dataset.id = id;
              spanBorrar.addEventListener( 'click', handleEraseClick );

              //boton done
              spanDone.classList.add('btn');
              spanDone.textContent = 'X';
              spanDone.dataset.id = id;
              spanDone.addEventListener( 'click', handleDoneClick );
              liTodo.append(spanBorrar);
              liTodo.append(spanDone);
              ulList.append(liTodo);
              // ulList.innerHTML += `<li class="todo">${todoText}</li`;
              
       })
}
// ---
document
       .getElementById('add-button')
       .addEventListener( 'click', handleAddClick );