let arr1 = [1,2,3];
let arr2 = [4,5,6,7];

let resultado = [];
let combineArr = (arr1, arr2) => resultado.concat(arr1, arr2);

/*
function combineArr(arr1, arr2) {
    let resultado = [];
    return resultado.concat(arr1, arr2);
}
*/

/*
function combineArr(arr1, arr2) {
    let resultado = [];
    return resultado = [...arr1, ...arr2];
}
*/

console.log(combineArr(arr1, arr2));