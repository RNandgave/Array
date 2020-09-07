function linearSearch(num){
  let flag = false;
  let i = 0;
  for(i =0; i<data.length;i++){
    if (num == data[i]){
      flag = true
      break;
    }
  }
  document.getElementById(""+i).style.backgroundColor = "red"
  console.log(flag? `element present at ${i+1}`: "Not found");
}

function search(){
  const op = document.querySelector(".searchMethods").value;
  const num = parseInt(document.querySelector(".number").value);
  let index = -1;

  switch (op) {
    case 'linear':
      linearSearch(num);
      break;
    default:
      alert("Method not found");
  }
}
