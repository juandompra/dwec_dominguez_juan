let a = {
    name : "Juan",
    apellidos : "Domínguez",
    edad : "DAW",
}

let b = {
    name : "Juan",
    apellidos : "Domínguez",
    edad : "23",
}

function containsObject(a, b) {
    for (let keyA in a) {
        if (!(keyA in b)) {
            return false;
        }
    }

    return true;
}

console.log("Éste es el objeto a:");
console.log(a);

console.log("Éste es el objeto b:");
console.log(b);

console.log("Y el resultado es:");
console.log(containsObject(a, b));

