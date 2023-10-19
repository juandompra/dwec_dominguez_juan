function countVowels(str) {
    let contador = 0;
    let palabra = "";

    for (let i = 0; i < str.length; i++) {
        palabra = str.toLowerCase();
        
        let resultado = palabra.charAt(i) == 'a' ? contador++ : 
            palabra.charAt(i) == 'e' ? contador++ :
            palabra.charAt(i) == 'i' ? contador++ :
            palabra.charAt(i) == 'o' ? contador++ :
            palabra.charAt(i) == 'u' ? contador++ : contador;
    }

    return contador;
}

console.log(countVowels(" h o L a i i i i "));