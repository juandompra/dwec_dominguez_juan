let form = document.forms.login;
let correo = form.elements.correo;
let fieldset = document.getElementsByTagName('fieldset');
let contraseña = form.elements.pass;
let repetirContraseña = form.elements.repetirPass;

//Correo
correo.addEventListener ("focus", conFoco);
correo.addEventListener ("blur", sinFoco);

let error = document.createElement('span');
let error2 = document.createElement('span');
let error3 = document.createElement('span');

function sinFoco (e) {
    if (!(e.target.value.includes('@') && e.target.value.includes('.'))) {
        correo.classList.add('invalid');
        error.textContent = 'Por favor introduzca un correo válido.';

        correo.after(error);
    }
}

function conFoco (e) {
    correo.classList.remove('invalid');
    error.remove();
}


//Contraseña
contraseña.addEventListener ("focus", contrasenaFoco);
contraseña.addEventListener ("blur", contrasenaSinFoco);
//contraseña.addEventListener ("input", )

function contrasenaSinFoco (e) {
    if (passNoSegura(contraseña.value)) {
        error2.textContent = 'Contraseña no segura';
        contraseña.after(error2);
    }
}

function contrasenaFoco (e) {
    error2.remove();
}

function passNoSegura (pass) {
    let a = pass.split('');
    let mayus = false;
    let minus = false;
    let num = false;
    let lon = a.length;

    a.forEach ( char => {
        minus ||= 'abcdefgh1jklmnñopqrstuvwxyz'.includes(char);
        mayus ||= 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.includes(char);
        num ||= '0123456789'.includes(char);
    })

    return !(lon && mayus && minus && num);
}

//Repetir Contraseña

repetirContraseña.addEventListener("focus", repetirPassFoco);
repetirContraseña.addEventListener("blur", repetirPassSinFoco);

function repetirPassSinFoco (e) {
    if (contraseña.value != repetirContraseña.value) {
        repetirContraseña.classList.add('invalid');
        error3.textContent = 'Las contraseñas no son iguales';

        repetirContraseña.after(error3);
    }
}

function repetirPassFoco (e) {
    repetirContraseña.classList.remove('invalid');
    error3.remove();
}

console.log(form.submit); //e.preventDefault();

/* Hecho por Victor

const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const repass = document.getElementById('repass');
const error = document.getElementById('error');
const form = document.getElementById('form');

mail.addEventListener( 'blur', e => {
    // Correo válido
    if ( !(mail.value.includes('@') && mail.value.includes('.')) ) {
        error.textContent = 'El correo electrónico no es válido';
    }
} );

pass.addEventListener( 'input', e =>{
    //  Comprobar seguridad
    let password = pass.value
    let dif = 0;
    const letters = 'abcdefghijklmnñopqrstuvwxyz';
    const numbers = '0123456789';

    // P@ssw0rd 

    // Comprobar dígito
    let hasDigit = password
                                .split('')
                                .reduce( (acum, letter) => (acum || numbers.includes(letter)), false);
    if (hasDigit) dif += 1;

    // Comprobar dígito
    let hasLower = password
                                .split('')
                                .reduce( (acum, letter) => acum || letters.includes(letter), false);
    if (hasLower) dif += 1;

    // Comprobar dígito
    let hasUpper = password
                                .split('')
                                .reduce( (acum, letter) => acum || letters.toUpperCase().includes(letter), false)
    if (hasUpper) dif += 1;

    // Comprobar carácter
    let hasSymbol = password
                            .split('')
                            .reduce( (acum, letter) => {
                                console.log(!(numbers.includes(letter)));
                                console.log( !(numbers.includes(letter.toLowerCase())));
                                let isSymbol = !(numbers.includes(letter)) && !(letters.includes(letter.toLowerCase()))
                                return acum || isSymbol;
                            }
                            , false);
    if (hasSymbol) dif += 1;

    // Incremento según longitud
    dif += Math.ceil(password.length/3);
    console.log(`Dificultad: ${dif}`);

    let msg = dif<4 ? 'Muy fácil' :
                    dif <6 ? 'Fácil' :
                    dif <8 ? 'Aceptable' :
                    'Segura';
    error.textContent = msg;
                    } );


repass.addEventListener('blur', e => {
    // Enviado formulario
    if (pass.value != repass.value) {
        error.textContent = 'Las contraseñas no son iguales';
    }
    
});

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(`Mail: ${mail.value}`);
    console.log(`Pass: ${pass.value}`);
})
*/