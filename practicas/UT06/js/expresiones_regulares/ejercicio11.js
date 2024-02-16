const form = document.forms.formulario1;
const enviar = document.getElementById('enviar');
const pFecha = document.getElementById('fecha');

let texto = form.elements.texto;
let error = document.createElement('span');

enviar.addEventListener('click', e => {
    e.preventDefault();

    if (!(texto.value.match(/^[0-3][0-9]\/[0-3][0-9]\/\d{4}$/g))) {
        texto.classList.add('invalid');

        error.textContent = "Introduce una fecha válida.";
        enviar.after(error);

        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
    } else {
        convertirFecha(texto.value);
        console.log(texto.value);
    }
})

function convertirFecha(fecha) {
    let datosFecha = fecha.split('/');
    let dia = datosFecha[0];
    let mes = datosFecha[1];
    let año = datosFecha[2];

    const meses = "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(' ');

    pFecha.textContent = `${dia} de ${meses[mes - 1]} de ${año}`;
}