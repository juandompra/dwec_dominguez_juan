let numero;
do {
    numero = prompt("Introduce un número válido");
} while (numero === null || isNaN(+numero) || numero.trim() == '');

if (numero%2 == 0) {
    confirm(`El número que has introducido es ${numero}, y es par.`);
} else {
    confirm(`El número que has introducido es ${numero}, y es impar.`);
}