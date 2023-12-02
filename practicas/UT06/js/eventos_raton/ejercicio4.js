let box = document.getElementById("box");
let contador = 0;

let div = document.createElement('div');
let p = document.createElement('p');

div.addEventListener('click', e => {
    contador++;

    let width = Math.random() * 250;
    let height = Math.random() * 250;
    let left = Math.random() * 75;
    let top = Math.random() * 75;

    p.textContent = contador;

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.left = `${left}%`;
    div.style.top = `${top}%`;
} )

div.classList.add('dentro');

p.textContent = contador;
box.append(p);
box.append(div);
