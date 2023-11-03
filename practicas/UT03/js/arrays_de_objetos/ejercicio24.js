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

function getUsernames() {
    let resultado = [];

    arr.forEach(element => {
        resultado.push((element.nombre + element.ape1.charAt(0) + element.ape2.charAt(0)).toLowerCase()); 
    });

    return resultado;
}

console.log(getUsernames());

/*
    Hecho por victor:

    function getUsernames() {
        return arr.map (alumno => {
            let username = `${alumno.nombre}${alumno.ape1[0]}${alumno.ape2[0]}`.toLowerCase();
        })

        otra forma seria:

        return arr.map ({nombre, ape1, ape2} => {
            let username = `${nombre}${ape1[0]}${ape2[0]}.toLowerCase();
        })
    }
*/