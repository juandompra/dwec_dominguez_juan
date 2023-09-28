let anoNac = prompt("Indica tu año de nacimiento");
anoNac = Number(anoNac);

if (anoNac >= 1994 && anoNac <= 2010) {
    console.log("Generación Z");
} else if (anoNac >= 1981 && anoNac <= 1993) {
    console.log("Generación milenial");
} else if (anoNac >= 1969 && anoNac <= 1980) {
    console.log("Generación X");
} else if (anoNac >= 1949 && anoNac <= 1968) {
    console.log("Baby Boomer");
} else {
    console.log("Generación desconocida");
}