
function find(){
  let f = parseInt(document.querySelector(".number").value)
  let flag = false
  let i =0
  for(i =0; i<data.length;i++){
    if (f == data[i]){
      flag = true
      break;
    }
  }
  console.log(flag? `element present at ${i+1}`: "Not found");
}
