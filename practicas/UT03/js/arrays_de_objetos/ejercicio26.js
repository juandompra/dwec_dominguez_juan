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

function getUnsecurePass() {
    let resultado = [];

    arr.forEach(({nombre, ape1, ape2, pass}) => {
        if (passValida (pass)) {
            resultado.push(
                {
                alumno : nombre + ' ' + ape1 + ' ' + ape2,
                pass
                }
            );
        }
    });

    return resultado;
}

function passValida (pass) {
    pass.trim();
    function caracteres () {
        //utilizar some
    }
    return pass.length < 8 && pass.length < 1 && !caracteres();
}

console.log(getUnsecurePass());