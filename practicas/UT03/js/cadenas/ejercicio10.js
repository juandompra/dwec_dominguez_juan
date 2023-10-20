function replaceWithPosition(str) {
    let resultado = "";

    for (let char of str) {
        resultado += ` ${" abcdefghijklmnopqrstuvwxyz".indexOf(char)}`;
    }

    return resultado;
}

console.log(replaceWithPosition('hola'));
console.log(replaceWithPosition('pesao'));
'8 15 12 1'

/*

function replaceWithPosition(str) {
    let resultado = "";
    let alfabeto = " abcdefghijklmnopqrstuvwxyz";

    for (let char of str) {
        if (char == str.length - 1) {
            resultado += alfabeto.indexOf(char);
        } else {
            resultado += alfabeto.indexOf(char) + " ";
        }
    }

    return resultado;
}

*/