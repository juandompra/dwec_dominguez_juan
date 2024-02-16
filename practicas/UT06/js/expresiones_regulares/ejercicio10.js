let form = document.forms.formulario1;
let fecha = form.elements.fecha;
let errorFecha = document.createElement('span');

let numTelefono = form.elements.numTelefono;
let errorNumTelefono = document.createElement('span');

let correo = form.elements.correo;
let errorCorreo = document.createElement('span');

let hexadecimal = form.elements.hexadecimal;
let errorHexa = document.createElement('span')

let IP = form.elements.direccionIP;
let errorIP = document.createElement('span');

let url = form.elements.url;
let errorUrl = document.createElement('span');

let contrasena = form.elements.contraseña;
let errorContrasena = document.createElement('span');

let nif = form.elements.nif;
let errorNif = document.createElement('span');

let matricula = form.elements.matricula;
let errorMatricula = document.createElement('span');

//fecha

fecha.addEventListener("blur", e => {
    if (!(e.target.value.match(/[0-3][0-9]\/[0-3][0-9]\/\d{4}\S/g))) {
        fecha.classList.add('invalid');

        errorFecha.textContent = "Introduce una fecha válida.";
        fecha.after(errorFecha);
    }
})

fecha.addEventListener("focus", e => {
    fecha.classList.remove('invalid');
    errorFecha.remove();
})

//Num Telefono

numTelefono.addEventListener("blur", e => {
    if (!(e.target.value.match(/\(\+\d\d\)[6-9][0-9]{8}\S/gi))) {
        numTelefono.classList.add('invalid');

        errorNumTelefono.textContent = "Introduce un número de teléfono válido.";
        numTelefono.after(errorNumTelefono);
    }
})

numTelefono.addEventListener("focus", e => {
    numTelefono.classList.remove('invalid');
    errorNumTelefono.remove();
})

//Correo

correo.addEventListener("blur", e => {
    if (!(e.target.value.match(/^\w{1,}\@\w{1,}\.\w{1,}\S/gi))) {
        correo.classList.add('invalid');

        errorCorreo.textContent = "Introduce un correo válido.";
        correo.after(errorCorreo);
    }
})

correo.addEventListener("focus", e => {
    correo.classList.remove('invalid');
    errorCorreo.remove();
})

//Hexadecimal

hexadecimal.addEventListener("blur", e => {
    if (!(e.target.value.match(/^\w{1,}\@\w{1,}\.\w{1,}\S/gi))) {
        hexadecimal.classList.add('invalid');

        errorHexa.textContent = "Introduce un código hexadecimal válido.";
        hexadecimal.after(errorHexa);
    }
})

hexadecimal.addEventListener("focus", e => {
    hexadecimal.classList.remove('invalid');
    errorHexa.remove();
})

//IP

IP.addEventListener("blur", e => {
    if (!(e.target.value.match(/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/))) {
        IP.classList.add('invalid');
        errorIP.textContent = "Introduce una dirección IP válida";
        IP.after(errorIP);
    }
});


IP.addEventListener("focus", e => {
    IP.classList.remove('invalid');
    errorIP.remove();
})

//url

url.addEventListener("blur", e => {
    if (!(e.target.value.match(/^https?:\/\/\w+(\.\w+)+/i))) {
        url.classList.add('invalid');

        errorUrl.textContent = "Introduce una URL válida";
        url.after(errorUrl);
    }
});

url.addEventListener("focus", e => {
    url.classList.remove('invalid');
    errorUrl.remove();
});

//pass

contrasena.addEventListener("blur", e => {
    if (!(e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/))) {
        contrasena.classList.add('invalid');

        errorContrasena.textContent = "Mínimo una minúscula, una mayúscula, un dígito y 8 caracteres.";
        contrasena.after(errorContrasena);
    }
});

contrasena.addEventListener("focus", e => {
    contrasena.classList.remove('invalid');
    errorContrasena.remove();
});

//nif

nif.addEventListener("blur", e => {
    if (!(e.target.value.match(/^\d{8}[a-zA-Z]$/))) {
        nif.classList.add('invalid');

        errorNif.textContent = "Introduce un NIF válido";
        nif.after(errorNif);
    }
});

nif.addEventListener("focus", e => {
    nif.classList.remove('invalid');
    errorNif.remove();
});

//matricula

matricula.addEventListener("blur", e => {
    if (!(e.target.value.match(/^\d{4}[a-zA-Z]{3}$/))) {
        matricula.classList.add('invalid');

        errorMatricula.textContent = "Introduce una matrícula válida";
        matricula.after(errorMatricula);
    }
});

matricula.addEventListener("focus", e => {
    matricula.classList.remove('invalid');
    errorMatricula.remove();
});