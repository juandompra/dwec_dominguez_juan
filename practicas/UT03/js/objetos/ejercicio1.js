let objeto = { 
    name: "Juan",
    email: "prueba@gmail.com",
};

function cloneObject(objeto) {
    let clon = {};

    for (let key in objeto) {
        clon[key] = objeto[key];
    }

    return clon;
}

//let cloneObject = clon => {return {...objeto}}

/*
function cloneObject(objeto) {
    let clon = {};

    clon = {...objeto};

    return clon;
}
*/

console.log("Primero el objeto: ");
console.log(objeto);
console.log("Ahora el clon: ");

console.log(cloneObject(objeto));
