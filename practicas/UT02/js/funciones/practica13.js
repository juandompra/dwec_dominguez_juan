//importScripts(practica12.js);

let num = Number(prompt("Introduce un número"));
let cont = 0;
let k = 1;

function isPrime (num) {
    if (num <= 0) {
        return false;
    }

    for (let k = 2; k < num; k++) {
        if (num%k == 0) {
            return false;
        }  
    }
 
    return true;
}

while (cont < num) {
    if (isPrime (k) == true) {
        console.log(k);
        cont++;
    }
    k++;  
}