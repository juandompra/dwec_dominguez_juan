let anoNac = prompt("Indica tu año de nacimiento");
anoNac = Number(anoNac);

if (anoNac >= 1994 && anoNac <= 2010) {
    alert("Generación Z");
} else if (anoNac >= 1981 && anoNac <= 1993) {
    alert("Generación milenial");
} else if (anoNac >= 1969 && anoNac <= 1980) {
    alert("Generación X");
} else if (anoNac >= 1949 && anoNac <= 1968) {
    alert("Baby Boomer");
} else {
    alert("Generación desconocida");
}