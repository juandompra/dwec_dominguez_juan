let anoNac = prompt("Indica tu año de nacimiento");
anoNac = Number(anoNac);

let msg = n > 2010 ? "Fecha no válida" :
          n > 1994 ? "Generación Z"  :
          n > 1981 ? "Generación milenial" :
          n > 1969 ? "Generación X" :
          n > 1949 ? "Baby Boomer" :
          "Fecha no válida";

console.log(msg);