function bubbleSort(){
  let temp = null;
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
      setTimeout(display(), 5000);
    }
  }
  display();
  console.log(data);
}

function sort() {
  const op = document.querySelector(".sortMethods").value;
  switch(op){
    case 'bubble':
      bubbleSort()
      break;
    default:
      alert("No such method");
  }
}
