let numero;

do {
    numero = prompt("Introduce un número válido");
    if (!isNaN(+numero) && +numero > 0) {
        break;
    }
} while (numero);

if (numero%2 == 0) {
    console.log(`El número que has introducido es ${numero}, y es par.`);
} else {
    console.log(`El número que has introducido es ${numero}, y es impar.`);
}