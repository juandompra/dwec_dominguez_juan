function countLetters(str) {
    let resultado = {};
    let palabra = str.toLowerCase();
    palabra = palabra.trim();

    for (let char of palabra) {
        if (char == " ") {
            continue;
        }

        if (!resultado[char]) {
            resultado[char] = 1;
        } else {
            resultado[char] = resultado[char] + 1;
        }

        //resultado[char] = !char in resultado ? 1 : resultado[char] + 1;
    }

    return resultado;
}

console.log(countLetters("DAW DWEC"));
console.log(countLetters("ja ja j a j a j a jajaajaj jajajajdj"));