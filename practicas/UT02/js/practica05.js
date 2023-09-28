let numero;
do {
    numero = prompt("Introduce un número válido");
    if (!isNaN(+numero)) {
        break;
    }
} while (numero);

console.log(`Has introducido el número: ${numero}`);