function isIsograma(str) {
    let resultado = {};
    let palabra = str.toLowerCase();

    for (let char of palabra) {
        if (char == " ") {
            continue;
        }

        if (!resultado[char]) {
            resultado[char] = 1;
        } else {
            resultado[char] = resultado[char] + 1;
        }
    }

    for (let key in resultado) {
        for (let key2 in resultado) {
            if (resultado[key] !== resultado [key2]) {
                return false;
            }
        }
    }

    return true;
}

console.log('Deberia dar false: ');
console.log(isIsograma('acondicionar'));
console.log('Deberia dar false: ');
console.log(isIsograma('papelera escritura'));
console.log('Deberia dar true: ');
console.log(isIsograma('hola'));
console.log('Deberia dar true: ');
console.log(isIsograma('eeyy'));
console.log('Deberia dar false: ');
console.log(isIsograma('holah'));