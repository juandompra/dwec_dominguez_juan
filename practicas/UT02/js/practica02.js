let nombre = prompt("Dime tu nombre");
let primeraNota = prompt("Dime tu primera nota");
let segundaNota = prompt("Dime tu segunda nota");
primeraNota = Number(primeraNota);
segundaNota = Number(segundaNota);
let media = (primeraNota + segundaNota) / 2;
alert(`Hola ${nombre}, la nota media de tus examenes es ${media}`);