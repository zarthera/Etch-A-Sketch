const grid = document.querySelector(".grid");
const etchASketch = document.querySelector('.etch-a-sketch')

function resizeGrid(width, height){
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => row.remove());
  
  for (let i = 0; i < width; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    
    for (let j = 0; j < height; j++) {
      const tile = document.createElement("div");
      tile.classList.add('tile')
      row.appendChild(tile);
    
      const resetButton = document.querySelector('.reset-button')
      resetButton.addEventListener('click', () =>{
        etchASketch.classList.add("shake")
        setTimeout(() => {
          if(tile.style.backgroundColor !== ""){
            tile.style.animation = "fadeOut 1s ease", 400
          }
          setTimeout(() => {tile.style.animation = ""}, 500)
        })

        setTimeout(() => {tile.style.backgroundColor = "white"}, 500)
        setTimeout(() => {etchASketch.classList.remove('shake') }, 1000);
      })
    }
    grid.appendChild(row);
    
  }
}
const drawQueue = document.createElement('div')
drawQueue.style.fontFamily = "Lato"
drawQueue.style.marginBottom = "5px"
drawQueue.textContent = "Select a color, and start creating!"
document.body.prepend(drawQueue)
function selectColor(color) {

  const tiles = document.querySelectorAll('.tile');

  if (color == "psychadelic"){
    tiles.forEach((tile) => tile.addEventListener('mouseover', () => {
      tile.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    }));
    drawQueue.remove()
  }  
  else{
    drawQueue.remove()
    tiles.forEach((tile) => tile.addEventListener('mouseover', () => {
      tile.style.backgroundColor = color;
    }));
  }

}
resizeGrid(32, 24)




