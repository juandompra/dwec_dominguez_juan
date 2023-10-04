let numero;
do {
    numero = prompt("Introduce un número válido");
} while (numero === null || isNaN(+numero) || numero.trim() == '');

confirm(`Has introducido el número: ${numero}`);