const grid = document.querySelector(".grid");

for (let i = 0; i < 32; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let j = 0; j < 24; j++) {
    const tile = document.createElement("div");
    row.appendChild(tile);
    tile.addEventListener('mouseover', () =>{
      tile.style.backgroundColor = "black"
    })
  }
  
  grid.appendChild(row);
}


