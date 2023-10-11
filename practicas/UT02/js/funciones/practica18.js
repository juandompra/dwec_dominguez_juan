let num1;
let num2;
let num3;

while (num1 === null || isNaN(+num1) || num1.trim() == '') {
    num1 = prompt("Introduce un primer valor"); 
}

while (num2 === null || isNaN(+num2) || num2.trim() == '') {
    num2 = prompt("Introduce un segundo valor"); 
}

while (num3 === null || isNaN(+num3) || num3.trim() == '') {
    num3 = prompt("Introduce un tercer valor"); 
}

function triangulo (num1, num2, num3) {
    return ((num1 + num2) > num3) && ((num1 + num3) > num2)
    && ((num2 + num3) > num1);
}

console.log(triangulo(num1, num2, num3));
/*
    Correccion victor
    let isTriangle = (a,b,c) => (a+b>c) && etc;

    que seria lo mismo que:

    let istriangle2 = function (a,b,c) {
        return (a+b>c) && etc;
    }
*/