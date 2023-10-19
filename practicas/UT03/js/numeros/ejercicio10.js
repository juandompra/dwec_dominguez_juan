function replaceWithPosition(str) {
    let resultado = "";
    let alfabeto = " abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < str.length; i++) {
        let letra = "";

        letra = str.charAt(i);
        if (i == str.length - 1) {
            resultado = resultado + alfabeto.indexOf(letra);
        } else {
            resultado = resultado + alfabeto.indexOf(letra);
            resultado = resultado + " "; 
        }
    }

    return resultado;
}

console.log(replaceWithPosition('hola'));
console.log(replaceWithPosition('pesao'));
'8 15 12 1'