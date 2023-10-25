let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 7];
let arr3 = [1, 3, 5, 7];
let arr4 = [1, 3, 5, 7];

let isEqualArr = (arr1, arr2) => (arr1.length != arr2.length) ? false : arr1.every((item, index) => item === arr2[index]);
/*
function isEqualArr(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    let contador = 0;

    arr1.forEach(element => {
        arr2.forEach(element2 => {
            if (element == element2) {
                contador++;
            }
        });
    });

    return contador == arr1.length;
}
*/

console.log("Dará false");
console.log(isEqualArr(arr1, arr2));
console.log("Dará true");
console.log(isEqualArr(arr3, arr4));
console.log("Dará false");
console.log(isEqualArr(arr1, arr3));