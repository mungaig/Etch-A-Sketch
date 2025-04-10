//DOM 
const divsNum = document.querySelector('#divs-number');
const divsGen = document.querySelector('#divs-gen');
const container = document.querySelector('#container');
const squareRow = document.createElement('div');
squareRow.id = 'square-row';

//Logic
const containerWidth = container.offsetWidth;
divsGen.addEventListener('click', () => {
    container.innerHTML = '';    
        const squaresNum = divsNum.value; 
        const squareSide = containerWidth/squaresNum;
            for(let i = 1; i <= squaresNum; i++){
                const square = document.createElement('div');
                square.style.width = squareSide + 'px';
                square.style.height = squareSide + 'px';
                square.classList.toggle('square');
                squareRow.appendChild(square);
                for(let j = 1; j <= squaresNum; j++){
                    container.appendChild(squareRow);
                }
            divsNum.value = '';
            divsNum.focus()
            }                   
 });
