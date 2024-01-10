const data2 = {
    'Castilla y León': {
        'León': ['Leon','San Andrés', 'La Baéza'],
        'Zamora': ['Zamora', 'Benavente'],
    },
    'Asturias' : {
        'Asturias': ['Oviedo', 'Gijón', 'Avilés'],
        'Oviedo': ['Ejemplo1', 'Ejemplo2', 'Ejemplo3']
    }
}

let generico = '<option value="random"></option>';
let form = document.forms.formulario1;
let comunidad = form.elements.comunidad;
let provincias = form.elements.provincia;
let localidades = form.elements.localidad;

comunidad.innerHTML += generico;

for (const element in data2) {
    comunidad.append(new Option(element, element));
}
// con la primera variable
// let com = data.find(item => item.comunidad = "Castilla y León");
// com.provincias.map(item => item.provincias) //[León, Zamora]

comunidad.addEventListener('change', () => {
    provincias.innerHTML = generico;
    localidades.innerHTML = generico;

    let comunidadSeleccionada = data2[comunidad.value];
    
    for (const prop in comunidadSeleccionada) {
        provincias.append(new Option(prop, prop));
    }
});

provincias.addEventListener('change', () => {
    localidades.innerHTML = generico;
    
    data2[comunidad.value][provincias.value].forEach(localidad => {
        localidades.append(new Option(localidad, localidad));
    });
});

for (const prop in data2[comunidad.selected.value]) {
    let provincia = new Option(prop, prop);
    provincias.append(provincia);
    //console.log(prop); //Nombre de la provincia
    //console.log(data2['Castilla y León'][prop]);//array de localidades
}