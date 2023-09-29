let n = prompt("Introduce la cantidad a multiplicar");
let k = prompt("Introduce el número de la tabla de multiplicar al que quieres llegar");

n = Number(n);
k = Number(k);

for (let cont = 1; cont <= k; cont++) {
    let multiplicacion = n * cont;
    alert(`${n} \* ${cont} = ${multiplicacion}`); 
    }