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

function addNif(arr) {
    arr.forEach(element => {
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

        element.nif = element.dni + '-' + letras[element.dni % 23];

        delete element.dni;
    });

    return arr;
}

console.log(addNif(arr));