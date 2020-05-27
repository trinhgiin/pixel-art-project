//define color variable
let color; 


function makeGrid(event) {
    // get height anf width inputs
    const rows = document.getElementById("inputHeight").value;
    const columns = document.getElementById("inputWidth").value;
    color = document.getElementById("colorPicker").value;
    // drawing table
    const table = document.getElementById("pixelCanvas");
    // clear existing input every time user clicks submit
    table.innerHTML = '';
    for (let row = 0; row < rows; row++) {
        // add row to table
        const newRow = document.createElement("tr");
        table.appendChild(newRow);
        for (let column = 0; column < columns; column ++) {
            //add column to row
            const newColumn = document.createElement("td");
            newColumn.addEventListener("click", colorCell);
            newRow.appendChild(newColumn);
        }
    
    }
    event.preventDefault();
}

//add color to cell
function colorCell(event) {
    //extra click on colored cell will set it back to white
    if (event.target.bgColor === color) {
        event.target.bgColor = "white";
    } else {
        event.target.bgColor = color;
    }
}
// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
form.addEventListener("submit", makeGrid);

