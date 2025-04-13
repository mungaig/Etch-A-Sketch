// DOM
const container = document.querySelector('#container');
const gridGenBtn = document.querySelector('#grid-btn');
// let opacity = 0.1;

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
            cell.setAttribute('id','square');
            row.appendChild(cell);
            cell.addEventListener('mouseenter', () => {            
                    cell.style.backgroundColor = genRandomColor();
            });
        }
    }
}

//Call function
createGrid(16);

//Generate the grid based on user input
gridGenBtn.addEventListener('click', () => {
    container.innerHTML = '';
    const userInput = document.querySelector('#user-input');
    const cellsNum = parseInt(userInput.value);
        if(isNaN(cellsNum)|| cellsNum > 100|| cellsNum < 1){
            alert('Please enter a valid number');
        }
        else{
            createGrid(cellsNum);
            userInput.value = '';
            userInput.focus();   
        }
    });

//Create 'hover' effect
//generate a random color
function genRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    return `rgb(${r},${b},${g})`;
}

