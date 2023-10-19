function convertBase( str, baseFrom, baseTo ) {

    let numero = parseInt(str, baseFrom); //le pasamos un numero y opcionalmente la base
                                        //y me devuelve el numero en base 10
    return numero.toString(baseTo);
}

console.log(convertBase('10010', 2, 16));
console.log(convertBase('1100', 2, 16));