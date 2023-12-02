const box = document.getElementById("box");

box.addEventListener("click", e => {
    if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
    } else {
        e.target.classList.add("selected");
    }
})

box.addEventListener('contextmenu', e => {
    e.target.classList.add("derecho");  
});

box.onmousedown = () => false;

"0123456789".split("").forEach( (row, iRow) => {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    "0123456789".split("").forEach( (column, iColumn) => {
        const spanColumn = document.createElement("span");
        spanColumn.textContent=column + row;
        spanColumn.classList.add("cell");
        spanColumn.id = column + row;
        divRow.append(spanColumn);
    });
    box.append(divRow);
})
