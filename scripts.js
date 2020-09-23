const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear");
const sizeSelect = document.querySelector('select');
const rainbowButton = document.querySelector('#rainbowButton');
let lastSize;
let rainbow = 0;

createGrid(50);

sizeSelect.addEventListener('change', (e) => (
    createGrid(e.target.value)
));
clearButton.addEventListener('click', () => {
    createGrid(lastSize)
});
rainbowButton.addEventListener('click', () => {
    rainbowFunction();
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
function rainbowFunction() {
    if (rainbow == 1) {
        rainbow = 0;
        rainbowButton.setAttribute('class', 'rainbow-off')
    }
    else {
        rainbow = 1;
        rainbowButton.setAttribute('class', 'rainbow-on')
    }
}
function fill() {
    if (rainbow == 0) {
        this.style.backgroundColor = 'black';
        this.style.borderColor = 'black'
    }
    else {
        this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        this.style.border = 'none'
    }
}