var a=null;
function read() {
  a = document.querySelector(".array").value
  a = a.split(",")
  for(let i =0; i<a.length; i++)
  a[i] = parseInt(a[i]);
}

function display(){
  console.log(a);
}


function find(){
  let f = parseInt(document.querySelector(".number").value)
  let flag = false
  let i =0
  for(i =0; i<a.length;i++){
    if (f == a[i]){
      flag = true
      break;
    }
  }
  console.log(flag? `element present at ${i}`: "Not found")
}
