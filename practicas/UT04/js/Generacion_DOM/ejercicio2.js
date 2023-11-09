
let div = document.querySelector("#months");
let cont = 1;
let arr = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
            'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
            'Noviembre', 'Diciembre'];

while (cont < arr.length) {
    div.innerHTML +=
    `<div class="month">
        <div class="month-number">${cont}</div>
        <div class="month-name">${arr[cont]}</div>
    </div>`;
    cont++;
}

/*
hecho por victor:

let months = "enero febrero marzo";
let a = months.split(" ")
      .map( (item, index) => 
            `<div class="month">
                <div class="month-number">${index + 1}</div>
                <div class="month-name">${item}</div>
            </div>` )
       .join("")

div.innerHTML = a;
*/