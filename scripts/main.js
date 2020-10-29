const gridContainer = document.querySelector('.container');

function showGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const grids = document.createElement('div');
      grids.classList.add('grid');
      gridContainer.appendChild(grids);
    }
  }
}

function changeGridColor() {
  // Set black color as default color, focus on button
  // Update later: Focus should not be removed when clicking outside div
  let color = 'black-color';
  document.querySelector('#black').focus();

  // Change color based on user's choice
  const colorBtns = document.querySelectorAll('.color-options button');
  colorBtns.forEach(colorBtn => {
    colorBtn.addEventListener('click', function (e) {
      if (e.target.id === 'black') {
        color = 'black-color';
      } else {
        color = 'random-color';
      }
    })
  })

  // Apply color on mouseover
  // Refactor later
  const grids = document.querySelectorAll('.container div');
  grids.forEach(grid => {
    grid.addEventListener('mouseover', function () {
      if (color === 'black-color') {
        this.style.background = 'rgb(0, 0, 0)';
      }

      if (color === 'random-color') {
        let redRatio = getRandomColor(255);
        let greenRatio = getRandomColor(255);
        let blueRatio = getRandomColor(255);
        this.style.background = `rgb(${redRatio},${greenRatio},${blueRatio})`;
      }
    })
  });
}

// Reset grid, ask user for grid size
function createGrid() {
  const createNewGrid = document.querySelector('.create-grid');
  createNewGrid.addEventListener('click', function () {
    // Get user input
    const gridSize = parseInt(prompt('Enter grid size (0 to 99): ', 16));
    if (gridSize >= 100) {
      alert('Please select a value lower than 100.');
    } else if (!gridSize) { // If prompt is cancelled
      alert('Please pick a value from 0 to 99.')
    } else {
      gridContainer.innerHTML = ''; // Reset grids
      // documentElement has access to root element in CSS; also variable --xx
      document.documentElement.style.setProperty('--grid-size', gridSize);
      showGrid(gridSize);
      changeGridColor();
    }
  })
}

function getRandomColor(max) {
  return Math.floor(Math.random() * max);
}

// Run functions here

// Initial functions to run
showGrid(16);
changeGridColor();

// Also runs the previous two functions inside 
createGrid();




