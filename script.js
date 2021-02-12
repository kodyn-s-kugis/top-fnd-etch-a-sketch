/*-------------------------------------*
  #Selectors
*-------------------------------------*/

const root = document.documentElement;
const container = document.querySelector(`.container`);

/*-------------------------------------*
  #Create Grid
*-------------------------------------*/
function createGrid(x, y) {
  // Variables
  const sumCells = x * y;
  const sqrtCells = Math.sqrt(sumCells);

  // Set Grid Dimensions
  setRow(sqrtCells);
  setCol(sqrtCells);

  // Generate Container Cells
  generateCells(sumCells);
}

function setRow(n) {
  root.style.setProperty(`--row`, n);
}

function setCol(n) {
  root.style.setProperty(`--col`, n);
}

function generateCells(n) {
  for (let i = 0; i < n; i++) {
    const cell = createCell();
    container.appendChild(cell);
  }
}

/*-------------------------------------*
  #Create Cell
*-------------------------------------*/
function createCell() {
  // Variables
  const element = document.createElement(`div`);

  // Apply CSS
  element.classList.add(`container-cell`);

  return element;
}

/*-------------------------------------*
  #Editting Cell
*-------------------------------------*/
container.addEventListener(`mouseover`, (e) => {
  // Variables
  const cell = e.target;

  // Apply CSS
  cell.style.backgroundColor = `black`;
});

/*-------------------------------------*
  #Testing
*-------------------------------------*/
createGrid(32, 32);
