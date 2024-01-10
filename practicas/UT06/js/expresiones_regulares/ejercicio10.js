let form = document.forms.formulario1;
let fecha = form.elements.fecha;
let errorFecha = document.createElement('span');

let numTelefono = form.elements.numTelefono;
let errorNumTelefono = document.createElement('span');

let correo = form.elements.correo;
let errorCorreo = document.createElement('span');

let hexadecimal = form.elements.hexadecimal;
let errorHexa = document.createElement('span')

fecha.addEventListener("blur", e => {
    if (!(e.target.value.match(/[0-3][0-9]\/[0-3][0-9]\/\d{4}\S/gi))) {
        fecha.classList.add('invalid');

        errorFecha.textContent = "Introduce una fecha válida";
        fecha.after(errorFecha);
    }
})

fecha.addEventListener("focus", e => {
    fecha.classList.remove('invalid');
    errorFecha.remove();
})

numTelefono.addEventListener("blur", e => {
    if (!(e.target.value.match(/\(\+\d\d\)[6-9][0-9]{8}\S/gi))) {
        numTelefono.classList.add('invalid');

        errorNumTelefono.textContent = "Introduce un número de teléfono válido";
        numTelefono.after(errorNumTelefono);
    }
})

numTelefono.addEventListener("focus", e => {
    numTelefono.classList.remove('invalid');
    errorNumTelefono.remove();
})

correo.addEventListener("blur", e => {
    if (!(e.target.value.match(/^\w{1,}\@\w{1,}\.\w{1,}\S/gi))) {
        correo.classList.add('invalid');

        errorCorreo.textContent = "Introduce un correo válido";
        correo.after(errorCorreo);
    }
})

correo.addEventListener("focus", e => {
    correo.classList.remove('invalid');
    errorCorreo.remove();
})

hexadecimal.addEventListener("blur", e => {
    if (!(e.target.value.match(/^\w{1,}\@\w{1,}\.\w{1,}\S/gi))) {
        hexadecimal.classList.add('invalid');

        errorHexa.textContent = "Introduce un código hexadecimal válido";
        correo.after(errorHexa);
    }
})

hexadecimal.addEventListener("focus", e => {
    hexadecimal.classList.remove('invalid');
    errorHexa.remove();
})