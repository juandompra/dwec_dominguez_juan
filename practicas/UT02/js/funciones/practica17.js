let num;

while (num === null || isNaN(+num) || num.trim() == '') {
    num = prompt("Introduce una capacidad válida"); 
}

let medida = prompt ("Introduce una unidad de medida válida");

let medidaAConvertir = prompt ("Introduce una unidad de medida válida a convertir");

function convertToBytes (capacity, from) {
    let resultado = from == "B" || from == "Byte" ? capacity * 1 :
        from == "KB" || from == "Kilobyte" ? capacity * 1000 :
        from == "MB" || from == "Megabyte" ? capacity * 1000000 :
        from == "GB" || from == "Gigabyte" ? capacity * 1000000000 :
        from == "TB" || from == "Terabyte" ? capacity * 1000000000000 :
        from == "PB" || from == "Petabyte" ? capacity * 1000000000000000 :
        from == "EB" || from == "Exabyte" ? capacity * 1000000000000000000 :
            "Error";
    
    return resultado;
}

function convertCapacity (n, from, to) {
    let valor = convertToBytes(n, from);

    let resultado = to == "B" || to == "Byte" ? valor / 1 :
        to == "KB" || to == "Kilobyte" ? valor / 1000 :
        to == "MB" || to == "Megabyte" ? valor / 1000000 :
        to == "GB" || to == "Gigabyte" ? valor / 1000000000 :
        to == "TB" || to == "Terabyte" ? valor / 1000000000000 :
        to == "PB" || to == "Petabyte" ? valor / 1000000000000000 :
        to == "EB" || to == "Exabyte" ? valor / 1000000000000000000 :
            n;

    return resultado;
}

console.log(convertCapacity(num, medida, medidaAConvertir));