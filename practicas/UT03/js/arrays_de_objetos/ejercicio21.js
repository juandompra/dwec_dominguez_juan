let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]

function getAverageGrade( str ) {
    let total = 0;
    let contador = 0;

    arr.forEach(element => {
        if (element.notas[str]) {
            total += element.notas[str];
            contador++;
        }
    });

    return (total / contador).toFixed(2);
}

console.log(getAverageGrade( 'DIW' ));

/*
function getAverageGrade(str) {

    let media = 0;
 
    media = arr.reduce(function(objeto, usuario) {
        if (usuario.notas[str]) {
            objeto.suma += usuario.notas[str];
            objeto.contador++;
        }

        return objeto;

    }, {suma: 0, contador: 0} );
    console.log(media);

    // return La media en ${str} es: ${media.toFixed(2)};
    return La media en ${str} es: ${(media.suma / media.contador).toFixed(2)};
}
*/