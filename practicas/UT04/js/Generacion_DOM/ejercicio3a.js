let div = document.createElement("div");
div.id = "numbers";
let cont = 1;
while (cont <= 30) {
    let span = document.createElement("span");
    span.classList.add("number");
    span.textContent = cont;
    div.append(span);
    cont++;
}
document.body.append(div);