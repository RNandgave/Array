var a=null;
function convert() {
  a = document.querySelector(".array").value
  a = a.split(",")
  for(let i =0; i<a.length; i++)
  a[i] = parseInt(a[i]);
}

function display(){
  console.log(a);
}

function sort(){
  let temp = null
  for (let i =0; i<a.length; i++){
    for(let j = i+1; j<a.length;j++){
       if(a[i]>a[j]){
         temp = a[i]
         a[i] = a[j]
         a[j] = temp
       }
    }
  }
  console.log(a)
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
