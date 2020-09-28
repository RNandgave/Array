var data = null;
var size = null;
const grid = document.querySelector(".rightup");
var chartLabels = [];

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
    chartLabels.push("" + i);
  }
  size = data.length;
  display();
}

function display() {
  grid.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "i"+i);
    square.append(data[i]);
    grid.appendChild(square);
  }
  updateChart();
  //highlight(6,0)
}


function highlight(i,j){
  console.log("Inised highlight");
  iindex = document.querySelector("#i"+i);
  jindex = document.querySelector("#i"+j);
  iindex.style.backgroundColor = "lightgreen";
  jindex.style.backgroundColor = "lightgreen";
  setTimeout(()=>{
    iindex.style.backgroundColor = "white";
    jindex.style.backgroundColor = "white";
  },250)

}
