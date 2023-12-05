let crono = document.getElementById('time');
let score = document.getElementById('score');
let zonaDeJuego = document.getElementById('game-zone');
let juego = document.createElement('div');
let contador = 0;
let nivelDificultad = 1;

let jugadores = [];

let interval;
let running;
let totalMils = 0;
function updateTime () {
    totalMils += 45;
    let milis = (totalMils % 1000).toFixed(0).padEnd(3, "0");
    let secs = ((totalMils/1000) % 60).toFixed(0).padStart(2, "0");

    crono.textContent = `${secs}:${milis}`;
    score.textContent = contador;

    if (secs == 20) {
        clearInterval(interval);
        score.textContent = contador;
        crono.textContent = '20:000';
        let nombre = document.getElementById('player-input').value;
        jugadores.push({
            'name' : nombre,
            'playerScore' : contador
        });
        document.getElementById('player-input').value = "";
        mostrarScores();
    }
}

juego.addEventListener('click', e => {
    contador++;
    let num1 = Math.random()*255;
    let num2 = Math.random()*255;
    let num3 = Math.random()*255;
    zonaDeJuego.style.backgroundColor = `rgb(${num1.toFixed(0)}, ${num2.toFixed(0)}, ${num3.toFixed(0)})`;

    let num4 = Math.random()*255;
    let num5 = Math.random()*255;
    let num6 = Math.random()*255;
    juego.style.backgroundColor = `rgb(${num4.toFixed(0)}, ${num5.toFixed(0)}, ${num6.toFixed(0)})`;

    let width = Math.random() * 250 / nivelDificultad;
    let height = Math.random() * 250 / nivelDificultad;
    let left = Math.random() * 75;
    let top = Math.random() * 75;

    juego.style.width = `${width}px`;
    juego.style.height = `${height}px`;
    juego.style.left = `${left}%`;
    juego.style.top = `${top}%`;
} )


let start = document.getElementById('btn-start');
let reset = document.getElementById('btn-reset');

start.addEventListener("click", () => {
    if (!running) {
            interval = setInterval(updateTime,45);
            running = true;
    }

    juego.classList.add('dentro');
    zonaDeJuego.append(juego);
})

function mostrarScores () {
    jugadores.sort( (a, b) => 
        (a.playerScore > b.playerScore) ? -1 : 1
    )

    let first = document.getElementById('ranking-first');
    first.children[0].textContent = jugadores[0].name;
    first.children[1].textContent = jugadores[0].playerScore;

    let second = document.getElementById('ranking-second');
    second.children[0].textContent = jugadores[1].name;
    second.children[1].textContent = jugadores[1].playerScore;

    let third = document.getElementById('ranking-third');
    third.children[0].textContent = jugadores[2].name;
    third.children[1].textContent = jugadores[2].playerScore;
}

reset.addEventListener("click", () => {
    clearInterval(interval)
    totalMils = 0;
    crono.textContent = 0;
    score.textContent = 0;
    contador = 0;
    running = false;
})

let dificultades = document.querySelectorAll('.diff-level');

dificultades.forEach(element => {
    element.addEventListener('click', dificultad)
});

function dificultad ( e ) {
    dificultades.forEach(element => {
        element.classList.remove("selected");
    });

    if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
    } else {
        e.target.classList.add("selected");
    }

    nivelDificultad = e.target.textContent;
}