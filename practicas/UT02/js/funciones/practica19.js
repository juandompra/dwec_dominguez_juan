let k;
let n;

while (k === null || isNaN(+k) || k.trim() == '') {
    k = prompt("Introduce un primer valor"); 
}

while (n === null || isNaN(+n) || n.trim() == '') {
    n = prompt("Introduce un segundo valor"); 
}

function sumOfMults(k, n) {
    let suma = 0;
    let resultado = "";

    for (let i = 1; i <= n; i++) {
        resultado = resultado + k + "*" + i;
        suma = suma + k * i;
        if (i != n) {
            resultado = resultado + " + ";
        }

        if (i == n) {
            resultado = resultado + " => ";
        }
    }

    resultado = resultado + suma;

    return resultado;
}

console.log(sumOfMults(k,n));