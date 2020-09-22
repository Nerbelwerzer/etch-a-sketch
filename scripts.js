const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear");
const pixels = document.querySelectorAll('.pixel');
const sizeSelect = document.querySelector('select')
let lastSize;

createGrid(50); 

sizeSelect.addEventListener('change', (e) => (
    createGrid(e.target.value)
));
clearButton.addEventListener('click', () => {
    createGrid(lastSize)
});
function createGrid(gridSize) {
    lastSize = gridSize;
    container.textContent = ''
    container.setAttribute('style', `grid-template-columns: repeat( ${gridSize}, 1fr); grid-template-rows: repeat( ${gridSize}, 1fr)`);
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        container.appendChild(pixel);
        pixel.addEventListener('mouseover', fill);
    }
}
function fill() {
    this.style.backgroundColor = 'black';
    this.style.borderColor = 'black'
}