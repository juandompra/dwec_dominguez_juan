function removeVowels(str) {
    let resultado = "";

    for (let i = 0; i < str.length; i++) {
        resultado = str.charAt(i) != 'a' &&
        str.charAt(i) != 'A' && str.charAt(i) != 'e' &&
        str.charAt(i) != 'E' && str.charAt(i) != 'i' &&
        str.charAt(i) != 'I' && str.charAt(i) != 'o' &&
        str.charAt(i) != 'O' && str.charAt(i) != 'u' &&
        str.charAt(i) != 'U' ? resultado + str.charAt(i) :
        resultado + '';
    }

    return resultado;
}

console.log(removeVowels("Hola mundo"));
console.log(removeVowels("IES Villabalter de San Andres"));