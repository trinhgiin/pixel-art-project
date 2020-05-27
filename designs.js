//define color variable
let color; 

// add color to cell
function colorCell(event) {
    event.target.bgColor = color;
}

function makeGrid(event) {
    // get height anf width inputs
    const rows = document.getElementById("inputHeight").value;
    const columns = document.getElementById("inputWidth").value;
    // drawing table
    const table = document.getElementById("pixelCanvas");
    // clear existing input every time user clicks submit
    table.innerHTML = '';
    for (let row = 0; row < rows; row++) {
        // add row to table
        const newRow = document.createElement("tr");
        table.appendChild(newRow);
        for (let column = 0; column < columns; column ++) {
            // add column to row
            const newColumn = document.createElement("td");
            newColumn.addEventListener("click", colorCell);
            newRow.appendChild(newColumn);
        }
    
    }
    event.preventDefault();
}

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
form.addEventListener("submit", makeGrid);

function pickColor() {
    color = document.getElementById("colorPicker").value;
}

// User picks the color
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", pickColor);
