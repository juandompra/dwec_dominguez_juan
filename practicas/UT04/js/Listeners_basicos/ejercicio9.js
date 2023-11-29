const board = document.getElementById("board");

board.addEventListener("click", e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    console.log(`Has pulsado la casilla ${e.target.id}`);
    const celdaPulsada = e.target.closest('.cell');
    console.log(celdaPulsada);
})

board.onmousedown = () => false;

"76543210".split("").forEach( (row, iRow) => {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    "ABCDEFGH".split("").forEach( (column, iColumn) => {
        const spanColumn = document.createElement("span");
        spanColumn.classList.add("cell");
        spanColumn.classList.add( (iRow + iColumn) % 2 == 0 ? "white" : "black")
        spanColumn.id = column + row;
        divRow.append(spanColumn);
    });
    board.append(divRow);
})

