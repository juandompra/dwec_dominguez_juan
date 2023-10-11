let a = {
    name : "Juan",
    apellidos : "Domínguez",
    edad : undefined,
};

function removeUndefined(a) {
    let resultado = {};
    
    for (key in a) {
        if (a[key] !== undefined) {
            resultado[key] = a[key];
        }
    }
    
    return resultado;
}

console.log("Éste es el object de a");
console.log(a);
console.log(removeUndefined(a));