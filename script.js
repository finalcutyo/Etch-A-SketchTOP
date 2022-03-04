let newRow;
let newCol;
const grid = document.querySelector('.grid');
const options = document.querySelector('.options');
let GRID_SIZE = document.querySelector('#grid-size').value; 
let color = document.querySelector('#color-picker').value;

draw();

document.querySelector('#color-picker').addEventListener('input', () => {
    color = document.querySelector('#color-picker').value;
});
document.querySelector('#grid-size-confirm').addEventListener('click', () => {
    GRID_SIZE = document.querySelector('#grid-size').value;
    draw();
});

document.querySelector('#clear-grid').addEventListener('click', draw);

function draw() {
    grid.innerHTML = '';
    for (let row = 0; row < GRID_SIZE - 1; row++) {
        newRow = document.createElement('div');
        newRow.className = 'gridRow';
        grid.appendChild(newRow);
        for (let col = 0; col < GRID_SIZE - 1; col++) {
            newCol = document.createElement('div');
            newCol.className = 'gridSquare';
            newRow.appendChild(newCol);
        }
    }
    document.querySelectorAll('.gridSquare').forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        })
    });
}