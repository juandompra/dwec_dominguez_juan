// function max( arr ) {
//     arr.reduce ((mayor, item) => {item < mayor}, -infinity);
// }

let arr = [3, 54, 66, 773, 5532, 4, 435, 432, 9429];

let max = (arr) => arr.reduce ((mayor, item) => mayor < item ? item : mayor, -Infinity);

console.log(max(arr));