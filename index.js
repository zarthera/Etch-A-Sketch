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
      row.appendChild(tile);
      tile.addEventListener('mouseover', () =>{
        tile.style.backgroundColor = "black"
      })
      const resetButton = document.querySelector('.reset-button')
      resetButton.addEventListener('click', () =>{
        etchASketch.classList.add("shake")
        setTimeout(() => {
          if(tile.style.backgroundColor == "black"){
            tile.style.animation = "fadeOut 1s ease", 400
          }
          setTimeout(() => {tile.style.animation = ""}, 500)
        })
        setTimeout(() => {tile.style.backgroundColor = "white"}, 500)
        setTimeout(() => { etchASketch.classList.remove('shake') }, 1000);
      })
    }
    grid.appendChild(row);
    
  }
}
resizeGrid(32, 24)




