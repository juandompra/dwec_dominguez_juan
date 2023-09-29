let numero;
do {
    numero = prompt("Introduce un número válido");
} while (numero === null || isNaN(+numero) || numero.trim() == '');

alert(`Has introducido el número: ${numero}`);