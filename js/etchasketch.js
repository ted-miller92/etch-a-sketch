const gridContainer = document.querySelector(".gridContainer");
    gridContainer.style.display = "grid";
    gridContainer.style.width = "575px";
    

    //create grid of height and width 500px and (x)cells
    function createGrid(size = 16){
        let cellSize = (575/size) + 'px';
        const grid = document.querySelector(".gridContainer");
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (i = 0; i < size * size; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = cellSize;
            cell.style.height = cellSize;

            cell.addEventListener('mouseenter', e =>{
                cell.style.backgroundColor = "rgb(100, 100, 100)";
            })
            gridContainer.appendChild(cell);

            //for touch screens
            /*cell.addEventListener('touchstart', e =>{
                cell.style.backgroundColor = "rgb(100, 100, 100)";
            })
            gridContainer.appendChild(cell);

            cell.addEventListener('touchmove', e =>{
                cell.style.backgroundColor = "rgb(100, 100, 100)";
            })
            gridContainer.appendChild(cell);
            */
        }    
    }
    createGrid();

    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', () =>{
        clearGrid();
    });

    //produce random color
    function randomColor(){
        let  random = Math.floor(Math.random()*16777215).toString(16);
        return random;
    }

    //rgb button
    const rgbButton = document.querySelector('.rgb');
    rgbButton.addEventListener('click', () => {
        let size = prompt("how many squares in your colorful grid?");
        clearGrid();
        deleteGrid();
        createGrid(size);
        for (j = 0; j < size * size; j++) {
            const cell = document.querySelector('.cell');
            cell.addEventListener('mouseenter', e =>{
                cell.style.backgroundColor = "#" + randomColor();
            });
            gridContainer.appendChild(cell);
        }
    })
    //resize button
    const resizeButton = document.querySelector('.resize');
    resizeButton.addEventListener('click', () =>{
        let size = prompt("How many squares in your grid?");
        clearGrid();
        deleteGrid();
        createGrid(size);
    });

    //clear grid
    function clearGrid (){
        let cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.style.backgroundColor = "rgb(240, 240, 240)";
        });
    }

    //delete grid
    function deleteGrid(){
        let grid = document.querySelectorAll('.cell');
        grid.forEach((cell) => {
            gridContainer.removeChild(cell);
        })
    }