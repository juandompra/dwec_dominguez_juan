function isPangrama(str) {
    let resultado = {};
    let palabra = str.toLowerCase();
    let alfabeto = "abcdefghijklmnñopqrstuvwxyz";

    for (let char of palabra) {
        if (char == " ") {
            continue;
        }

        /*
            if (!resultado[char]) {
                resultado[char] = 1;
            } else {
                resultado[char] = resultado[char] + 1;
            }
        */
        resultado[char] = !char in resultado ? 1 : resultado[char] + 1;
    }

    let r = Object.keys(resultado).length == alfabeto.length ? true : false;

    return r;
}

console.log('Tiene que dar true: ');
console.log(isPangrama('abcdefghijklmnñopqrstuvwxyz'));
console.log('Tiene que dar false: ');
console.log(isPangrama('hola'));