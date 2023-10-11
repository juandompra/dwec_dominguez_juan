let num1;

while (num1 === null || isNaN(+num1) || num1.trim() == '') {
    num1 = prompt("Introduce un operando válido"); 
}

let num2;

while (num2 === null || isNaN(+num2) || num2.trim() == '') {
    num2 = prompt("Introduce otro operando válido"); 
}

let operador = prompt ("Dime un operador");

function calc(num1, num2, operador) {
    let resultado = operador == "+" ? +num1 + +num2 :
        operador == "-" ? num1 - num2 :
        operador == "/" ? num1 / num2 :
        operador == "*" ? num1 * num2 :
        operador == "%" ? num1 % num2 :
        operador == "==" ? num1 == num2 :
            "Error";

    return resultado;
}

console.log(calc (num1, num2, operador));

/*
    Victor lo corrige con switch, es lo mismo
*/