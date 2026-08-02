const drawingBoard = document.querySelector(".drawing-board");
const boardSize = document.querySelector("#drawing-board-size");

// class="pixel"
function renderPixels(number){
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

renderPixels(100);