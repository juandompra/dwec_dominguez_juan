let div = document.getElementById("numbers");
let cont = 1;
while (cont <= 30) {
    div.innerHTML += `<span class="number">${cont}</span>`;
    cont++;
}