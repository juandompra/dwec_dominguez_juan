let div = document.createElement("div");
div.id = "months";

let cont = 1;
let arr = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
            'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
            'Noviembre', 'Diciembre'];

while (cont < arr.length) {
    let div2 = document.createElement("div");
    div2.classList.add("month");
    let div3 = document.createElement("div");
    div3.classList.add("month-number");
    let div4 = document.createElement("div");
    div4.classList.add("month-name");

    div3.textContent = cont;
    div4.textContent = arr[cont];

    div2.append(div3, div4);
    div.append(div2);
    cont++;
}
document.body.append(div);

/*
Hecho por Victor 3-B:

let months = "enero febrero marzo";
let a = months.split(" ")
      .forEach ( (item, index) => {
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");

        div2.classList.add("month");
        div3.classList.add("month-number");
        div4.classList.add("month-name");

        div3.textContent = index + 1;
        div4.textContent = item;

        div2.append(div3, div4);
        div.append(div2);
      }
*/