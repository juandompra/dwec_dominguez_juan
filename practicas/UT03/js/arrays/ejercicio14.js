let arr = ["Juan", "Usuario2", "Usuario3", "Usuario4"];

//probar luego
//arr => arr.forEach (usuario => console.log(`Hola ${usuario}, bienvenido al curso de DWEC. `));

function sendMessage(arr) {
    arr.forEach(usuario => {
        console.log(`Hola ${usuario}, bienvenido al curso de DWEC. `);
    });
}

console.log(sendMessage(arr));