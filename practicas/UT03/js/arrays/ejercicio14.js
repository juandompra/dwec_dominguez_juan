let arr = ["Juan", "Pepe", "Jaime", "Carlos", "María"];

//probar luego
//arr => arr.forEach (usuario => console.log(`Hola ${usuario}, bienvenido al curso de DWEC. `));

function sendMessage(arr) {
    arr.forEach(usuario => {
        console.log(`Hola ${usuario}, bienvenido al curso de DWEC. `);
    });
}

console.log(sendMessage(arr));