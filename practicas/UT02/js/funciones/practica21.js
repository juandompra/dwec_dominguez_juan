let num  = prompt ("Introduce una cadena");

function isNumber(str) {
    if (str === null || isNaN(str) || str.trim() == '') {
        return false;
    }

    return true;
}

console.log(isNumber(num));