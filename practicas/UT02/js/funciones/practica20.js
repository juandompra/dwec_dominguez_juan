let num; 

while (num === null || isNaN(+num) || num.trim() == '') {
    num = prompt("Introduce un valor"); 
}

function getFibonacciAt (n) {

    if (n == 0) {
        return 0;
    }

    let num1 = 1;
    let num2 = 1;
    let num3 = num1 + num2;
    
    for (let k = 0; k < n; k++) {
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
    }

    return num1;
}

console.log(getFibonacciAt(num));

/*
    return fibonacci = n =>
        (n==0) ? 0 :
        (n==1) ? 1 : 
        (getFibonacciAt(n-1) + getFibonacci(n-2));
*/
