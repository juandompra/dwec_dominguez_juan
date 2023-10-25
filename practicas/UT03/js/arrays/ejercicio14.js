let arr = ["Juan", "Pepe", "Jaime", "Carlos", "María"];

function sendMessage(arr) {
    arr.forEach(usuario => {
        console.log(`Hola ${usuario}, bienvenido al curso de DWEC. `);
    });
}



console.log(sendMessage(arr));