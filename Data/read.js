var data = null;
const grid = document.querySelector(".rightup");

function read() {
  let squares = [];
  data = document.querySelector(".array").value;
  data = data.split(",");
  size = data.length;
  for (let i = 0; i < size; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "gr" + i);
    data[i] = parseInt(data[i]);
    square.append(data[i]);
    grid.appendChild(square);
    squares.push(square);
  }
}

function display() {
  console.log(data);
}
