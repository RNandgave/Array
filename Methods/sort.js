function bubbleSort() {
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (data[i] > data[j]) {
        swap(i, j);
      }
    }
  }
  display();
}

function selectionSort() {
  for (let i = 0; i < size - 1; i++) {
    let min_index = i;
    for (let j = i; j < size; j++) {
      if (data[j] < data[min_index]) min_index = j;
      swap(i, min_index);
    }
  }
  display();
}

function swap(i, j) {
  let temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

function sort() {
  const op = document.querySelector(".sortMethods").value;
  switch (op) {
    case "bubble":
      bubbleSort();
      break;
    case "selection":
      selectionSort();
      break;
    default:
      alert("No such method");
  }
}
