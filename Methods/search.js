function linearSearch(num){
  let flag = false;
  indexes = []
  let i = 0;
  for(i =0; i<data.length;i++){
    if (num == data[i]){
      indexes.push(i)
      flag = true
    }
  }
  for(i = 0; i<indexes.length; i++){
    document.getElementById(""+indexes[i]).style.backgroundColor = "red";
  }
  // console.log(flag? `element present at ${indexes}`: "Not found");
}

function binarySearch(num){
  bubbleSort();
  let flag = false;
  let start = 0;
  let end = data.length-1;
  let mid = 0
  while(start <= end){
    mid = Math.floor(start+(end-1)/2)
    if(data[mid]==num){
      flag = true;
      break;
    }else if(data[mid]<num){
      start = mid+1;
    }
    else
      end = mid-1;
  }
  flag==true? document.getElementById(""+mid).style.backgroundColor = "red" : alert("Not Found");
}


function search(){
  const op = document.querySelector(".searchMethods").value;
  const num = parseInt(document.querySelector(".number").value);
  let index = -1;

  switch (op) {
    case 'linear':
      linearSearch(num);
      break;
    case 'binary':
      binarySearch(num);
      break;
    default:
      alert("Method not found");
  }
}
