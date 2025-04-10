// DOM
const container = document.querySelector('#container');
const gridGenBtn = document.querySelector('#grid-btn');
const userInput = document.querySelector('#user-input');

// Logic
function createGrid(num){
    //create rows
    for(let i = 1; i <= num; i++){
        const row = document.createElement('div');
        row.classList.toggle('row');
        container.appendChild(row);
        //create cells
        for(let j = 1; j <= num; j++){
            const cell = document.createElement('div');
            cell.classList.toggle('cell');
            row.appendChild(cell);
        }
    }
}

//Call function
createGrid(16);
