let convertBase = ( str, baseFrom, baseTo ) => parseInt(str, baseFrom).toString(baseTo);

console.log(convertBase('10010', 2, 16));
console.log(convertBase('1100', 2, 16));