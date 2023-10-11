let object1 = {name : "Juan"};
let object2 = {
    apellido1 : "Domínguez",
    apellido2 : "Prada",
}


function mergeObjects(object1, object2) {
    let mezcla = {};

    for (let key in object1) {
        mezcla[key] = object1[key];
    }

    for (let key in object2) {
        mezcla[key] = object2[key];
    }

    return mezcla;
}

/*
    return mezcla = {...object1, ...object2}
*/

console.log("Éste es el primer objeto");
console.log(object1);

console.log("Éste es el segundo objeto");
console.log(object2);

console.log("Ésta es su mezcla");
console.log(mergeObjects(object1, object2));