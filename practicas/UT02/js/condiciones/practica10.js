let numero = prompt("Introduce un número");
numero = Number(numero);
let mayor = numero;
let menor = numero;
for (let k = 0; k < 4; k++) {
    numero = prompt("Introduce un número");
    numero = Number(numero);
    if (numero > mayor) {
        mayor = numero;
    }

    if (numero < menor) {
        menor = numero;
    } 
}

confirm(`El mayor número es ${mayor} y el menor es ${menor}`);

/*
//Correción de Víctor con infinity

let mayor = -infinity;
let menor = infinity;
for (let k = 0; k < 4; k++) {
    let numero = prompt("Introduce un número");
    mayor = (n > mayor) ? n : mayor;
    menor = (n < menor) ? n : menor;
}

confirm(`El mayor número es ${mayor} y el menor es ${menor}`);
*/