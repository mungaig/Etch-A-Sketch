// DOM
const container = document.querySelector('#container');
const gridGenBtn = document.querySelector('#grid-btn');

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

//Generate the grid based on user input
gridGenBtn.addEventListener('click', () => {
    container.innerHTML = '';
    const userInput = document.querySelector('#user-input');
    const cellsNum = userInput.value;
    createGrid(cellsNum);
    userInput.value = '';
    userInput.focus();    
});
