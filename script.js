const GRID = document.querySelector('.grid');
let grid_size = document.querySelector('#grid-size').value; 
let color = document.querySelector('#color-picker').value;

let newRow;
let newCol;
draw();

document.querySelector('#color-picker').addEventListener('input', () => {
    color = document.querySelector('#color-picker').value;
    document.documentElement.style.setProperty('--chosen-color', color);
});
document.querySelector('#randomizer').addEventListener('click', () => {
    let randR = Math.floor(Math.random() * 255);
    let randG = Math.floor(Math.random() * 255);
    let randB = Math.floor(Math.random() * 255);
    color = `rgb(${randR}, ${randG}, ${randB})`;
    document.documentElement.style.setProperty('--chosen-color', color);
})

document.querySelector('#grid-size-confirm').addEventListener('click', () => {
    grid_size = document.querySelector('#grid-size').value;
    draw();
});

document.querySelector('#clear-grid').addEventListener('click', draw);

function draw() {
    GRID.innerHTML = '';
    for (let row = 0; row < grid_size - 1; row++) {
        newRow = document.createElement('div');
        newRow.className = 'gridRow';
        GRID.appendChild(newRow);
        for (let col = 0; col < grid_size - 1; col++) {
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