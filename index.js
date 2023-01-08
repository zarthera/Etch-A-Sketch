const grid = document.querySelector(".grid");

for (let i = 0; i < 32; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let j = 0; j < 24; j++) {
    const tile = document.createElement("div");
    tile.style.width = "20px";
    tile.style.height = "20px";
    tile.style.border = "1px solid black";
    row.appendChild(tile);
  }

  grid.appendChild(row);
}

