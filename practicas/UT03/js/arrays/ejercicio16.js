let arr = [1, 2, 3, 4, 5, 6, 7];

function createPow( arr, pow ) {
    return arr.map(item => item**pow);
}

//esta mal esta de abajo
//let createPow = arr.map(item => item**pow);

console.log(createPow(arr, 3));
console.log(createPow(arr, 4));