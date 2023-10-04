let nombreCalle = prompt("¿En qué calle vives?");
let linea = "";

if (nombreCalle == "Calle Los Claveles" || nombreCalle == "Calle El Rosal" || nombreCalle == "Calle Las Hortensias" || nombreCalle == "Calle Las Margaritas") {
    linea = "Linea 1";
} else if (nombreCalle == "Calle Teleno" || nombreCalle == "Calle Catoute" || nombreCalle == "Calle Peña Ubiña" || nombreCalle == "Calle Vizcodillo") {
    linea = "Linea 2";
} else if (nombreCalle == "Calle Astorga" || nombreCalle == "Calle La Bañeza" || nombreCalle == "Calle Benavente") {
    linea = "Linea 3";
} else {
    confirm("linea Desconocida");
}
 
confirm(`Tienes que tomar la ${linea} para ir desde la ${nombreCalle} hasta el trabajo`);