function isHeterograma(str) {
    let resultado = {};
    let palabra = str.toLowerCase();

    for (let char of palabra) {
        if (char == " ") {
            continue;
        }

        if (!resultado[char]) {
            resultado[char] = 1;
        } else {
            return false;
        }
    }

    return true;
}

console.log(isHeterograma('Villabalter'));
console.log(isHeterograma('Victor'));
console.log(isHeterograma('Hola'));