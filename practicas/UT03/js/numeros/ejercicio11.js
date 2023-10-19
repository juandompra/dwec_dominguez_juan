function ascendDescend( len, min, max ) {
    let resultado = "";
    let sumatorioAscen = min;
    let contador = 0;
    let sumatorioDescen = max;

    while (contador < len) {
        if (sumatorioAscen < max) {
            resultado = resultado + sumatorioAscen;
            contador++;
            sumatorioAscen++;
        }
        if (sumatorioAscen == max) {
            resultado = resultado + sumatorioDescen;
            sumatorioDescen--;
            contador++;

            if (sumatorioDescen == min) {
                sumatorioAscen = min;
                sumatorioDescen = max;
            }
        }
    }

    return resultado;
}

console.log(ascendDescend(8, 2, 7));
console.log(ascendDescend( 10, 2, 5 ));