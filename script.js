//DOM 
const divsNum = document.querySelector('#divs-number');
const divsGen = document.querySelector('#divs-gen');
const container = document.querySelector('#container');

//Logic
const containerWidth = container.offsetWidth;
divsGen.addEventListener('click', () => {
    container.innerHTML = '';
    const squaresNum = divsNum.value;
    for(i = 1; i <= squaresNum; i++){
        const square = document.createElement('div');
        square.offsetHeight = containerWidth/squaresNum;
        square.classList.toggle('square');
        container.appendChild(square);
    }
    divsNum.value = '';
    divsNum.focus();
});