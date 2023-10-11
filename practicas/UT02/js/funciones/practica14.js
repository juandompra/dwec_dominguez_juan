let num;
while (num === null || isNaN(+num) || num.trim() == '') {
    num = prompt("Introduce un número válido"); 
}

let sum = 1;

function fact (num) {

    for (let i = 1; i <= num; i++) {
        sum = sum * i;
    }

    return sum;
}

console.log(fact(num));

/*
    Correccion de victor

    function fact(num) {

        return (num==1) ? 1 : num * fact(num-1);
    }

    console.log(`El factorial de 5 es ${fact(5)}`);
*/