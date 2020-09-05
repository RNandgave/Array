var data = null

function read() {
  data = document.querySelector(".array").value
  data = data.split(",")
  for(let i =0; i<data.length; i++)
  data[i] = parseInt(data[i]);
}

function display(){
  console.log(data);
}
