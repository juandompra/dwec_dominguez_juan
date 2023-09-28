//Pedimos los datos
let precioManzanas = prompt("Introduce el precio de las manzanas");
let numManzanas = prompt ("Introduce el número de manzanas");
let precioNaranjas = prompt("Introduce el precio de las naranjas");
let numNaranjas = prompt ("Introduce el número de naranjas");
let precioPlatanos = prompt ("Introduce el precio de los plátanos");
let numPlatanos = prompt ("Introduce el número de plátanos");

//Convertimos los datos recibidos de tipo String a tipo Number
precioManzanas = Number(precioManzanas);
numManzanas = Number(numManzanas);
precioNaranjas = Number(precioNaranjas);
numNaranjas = Number(numNaranjas);
precioPlatanos = Number(precioPlatanos);
numPlatanos = Number(precioPlatanos);

//Realizamos los cálculos que nos pide el programa
let totalManzanas = precioManzanas * numManzanas;
let totalNaranjas = precioNaranjas * numNaranjas;
let totalPlatanos = precioPlatanos * numPlatanos;

let precioTotal = totalManzanas + totalNaranjas + totalPlatanos;
let totalKilos = numManzanas + numNaranjas + numPlatanos;

console.log(`Has comprado un total de ${totalKilos} kilos de fruta y te ha costado ${precioTotal} euros`);