var data = null;
var size = null;
const grid = document.querySelector(".rightup");

function read() {
  let squares = [];
  data = document.querySelector(".array").value;
  if (data == NaN) {
    alert("Enter numbers seperated by ','");
  }
  data = data.split(",");
  size = data.length;
  for (let i = 0; i < size; i++) {
    data[i] = parseInt(data[i]);
  }
  size = data.length;
  updateChart();
  display();
}

function display() {
  grid.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    square.append(data[i]);
    grid.appendChild(square);
  }
}

function updateChart() {
  indiceChart.data.datasets[0].data = data;
  indiceChart.update();
}
