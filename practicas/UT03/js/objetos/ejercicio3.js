let object1 = {
    name : "Juan",
    apellidos : "Domínguez",
    curso : "DAW",
}

let object2 = {
    name : "Juan",
    apellidos : "Domínguez",
    edad : "23",
}

function intersectObjects(object1, object2) {
    let resultado = {};
    
    for (let key in object1) {
        if (key in object2) {
            resultado[key] = object1[key];
        }
    }

    return resultado;
}

console.log("Éste es el primer objeto:");
console.log(object1);

console.log("Éste es el segundo objeto:");
console.log(object2);

console.log("Éste es resultado:");
console.log(intersectObjects(object1, object2));