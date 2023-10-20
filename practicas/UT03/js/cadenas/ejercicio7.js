function countVowels(str) {
    let contador = 0;

    for (let char of str.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            contador++;
        }
    }

    /*
    for (let char of str) {
        let resultado = char == 'a' ? contador++ : 
            char == 'e' ? contador++ :
            char == 'i' ? contador++ :
            char == 'o' ? contador++ :
            char == 'u' ? contador++ : contador;
    }
    */

    return contador;
}

console.log(countVowels(" h o L a i i i i "));