let num;

while (num === null || isNaN(+num) || num.trim() == '' || +num != 0) {
    num = prompt("Introduce un número válido"); 
    if (!isNaN(+num)) {
        console.log(isPrime(+num));
    }
}

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

