// triggering initial 16 x 16
document.addEventListener("DOMContentLoaded", () => renderDrawingBoard(16))

// rendering elements
const drawingBoard = document.querySelector(".drawing-board");
const boardSize = document.querySelector("#drawing-board-size");

// input elements
// select buttons
const pressHoldBtn = document.querySelector("#press-hold-btn");
const eraseBtn = document.querySelector("#erase-btn");
const autoColorBtn = document.querySelector("#auto-color-btn");
// regular buttons
const clearBtn = document.querySelector("#clear-btn");
const resizeBtn = document.querySelector("#resize-btn");
const randomColorBtn = document.querySelector("#random-color-btn");
// color selector
const colorSample = document.querySelector("#color-sample");

// event listners
// resize
resizeBtn.addEventListener("click", () => {
    let boardSize;
    do {
        boardSize = parseInt(prompt("Enter drawing board size you want : "));
        boardSize = ((10 > boardSize) || (boardSize > 100)) ? NaN : boardSize;
        
    } while (Number.isNaN(boardSize));

    renderDrawingBoard(boardSize);
})

// draw on hover
drawingBoard.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("pixel")){
        const targetPixel = event.target;
        const pixelColor = colorSample.value;

        targetPixel.style.backgroundColor = pixelColor;
    }
});



// functions
function renderDrawingBoard(number){
    drawingBoard.replaceChildren();

    const boardFragment = document.createDocumentFragment();

    for (let i = 0; i < (number * number); i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // temporarly storing pixel divs. IF appended to DOM on each iterations that would be ineffieient 
        boardFragment.appendChild(pixel);
    }
    drawingBoard.appendChild(boardFragment);
    document.documentElement.style.setProperty("--grid-size", number);
    boardSize.textContent = `${number} x ${number}`;
}

