let abecedario = "abcdefghijklmnñopqrstuvwxyz";
let letrasTeclado = abecedario.split('');

let imagenes = document.getElementById('hanged');
imagenes.innerHTML += `<img src="imagenes/hangman_00.png" />`;

let keyboard = document.getElementById('keyboard');

letrasTeclado.forEach(letras => {
    keyboard.innerHTML += `<span class="key">${letras}</span>`;
});

numeroRandom = Math.floor(Math.random() * words.length); //multiplicamos por el length de words para que acceda a todas las palabras.
palabraAleatoria = words[numeroRandom];

let spaces = document.getElementById('spaces');

letrasPalabra = palabraAleatoria.split('');

letrasPalabra.forEach(element => {
    spaces.innerHTML += `<span class="space" id="${element}"></span>`;
});

let keys = document.querySelectorAll('.key');

keys.forEach(element => {
    element.addEventListener("click", mostrarLetra);
});

document.body.addEventListener("keydown", mostrarLetra);

let solucion = palabraAleatoria;
let numeroFails = 0;
let juegoFinalizado = 0;

function validarLetra (letra) {
    return letrasTeclado.includes(letra);
}

function mostrarLetra(e){
    let texto = document.getElementById('msg');
    let letrav2;

    console.log(e.key);

    if (e.type == "keydown") {
       if (validarLetra(e.key.toLowerCase())) {
            letrav2 = e.key.toLowerCase();
       }
    }

    if (e.type == "click") {
        letrav2 = e.target.textContent;
    }

    //console.log(solucion);


    if (juegoFinalizado == 0) {
        if (letrasPalabra.includes(letrav2)) {
            if (e.type == "keydown") {
                let marcadores = document.querySelectorAll('.key');
                marcadores.forEach(element => {
                    if (element.textContent == e.key.toLowerCase()) {
                        element.classList.add('succeed');
                    }
                });
            } else if (e.type == "click") {
                e.target.classList.add('succeed');
            }

            let letraSeleccionada = document.querySelectorAll(`#${letrav2}`);
                letraSeleccionada.forEach(element => {
                    element.textContent = letrav2;
                });

            solucion = solucion.replaceAll(`${letrav2}`,'');
            console.log(solucion);
            if (solucion == '') {
                juegoFinalizado = 1;
            }
        } else {
            if (e.type == "keydown") {
                let marcadores = document.querySelectorAll('.key');
                marcadores.forEach(element => {
                    if (element.textContent == e.key) {
                        element.classList.add('fail');
                    }
                });
            } else if (e.type == "click") {
                e.target.classList.add('fail');
            }
            numeroFails++;
            imagenes.innerHTML = "";
            imagenes.innerHTML += `<img src="imagenes/hangman_0${numeroFails}.png" />`;
    
            if (numeroFails == 9) {
                juegoFinalizado = 2;
            }
        }
    }

    if (juegoFinalizado == 1) {
        texto.textContent = '';
        texto.textContent = 'Has ganado';
        keys.forEach(element => {
            element.removeEventListener("click", mostrarLetra);
            document.body.removeEventListener("keydown", mostrarLetra);
        });
        texto.classList.add('succeed');
    }

    if (juegoFinalizado == 2) {
        texto.textContent = '';
        texto.textContent = 'Has perdido';
        keys.forEach(element => {
            element.removeEventListener("click", mostrarLetra);
            document.body.removeEventListener("keydown", mostrarLetra);
        });
        texto.classList.add('fail');
    }
}