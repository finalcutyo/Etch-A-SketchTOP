let GRID_SIZE = 16;
let newRow;
let newCol;
const grid = document.querySelector('.grid');
const options = document.querySelector('.options');


function draw() {
    for (let row = 0; row < GRID_SIZE - 1; row++) {
        newRow = document.createElement('div');
        newRow.className = 'gridRow';
        grid.appendChild(newRow);
        for (let col = 0; col < GRID_SIZE - 1; col++) {
            newCol = document.createElement('div');
            newCol.className = 'gridSquare';
            // newCol.setAttribute('id', `x${col} , y${row}`);
            newRow.appendChild(newCol);
        }
    }
}
draw();