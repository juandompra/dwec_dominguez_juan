function countLetters(str) {
    let resultado = {};

    for (let char of str.toLowerCase()) {
        
        if (char != " ") {
            resultado[char] = char in resultado ? resultado[char] + 1 : 1;
        }

        /*
        if (!resultado[char]) {
            resultado[char] = 1;
        } else {
            resultado[char] = resultado[char] + 1;
        }
        */
    }

    return resultado;
}

console.log(countLetters("DAW DWEC"));
console.log(countLetters("ja ja j a j a j a jajaajaj jajajajdj"));