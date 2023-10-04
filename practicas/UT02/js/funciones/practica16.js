let num;

while (num === null || isNaN(+num) || num.trim() == '') {
    num = prompt("Introduce una capacidad válida"); 
}

let medida = prompt ("Introduce una unidad de medida válida");

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

console.log(convertToBytes(num, medida));