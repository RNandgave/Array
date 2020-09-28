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
    for (let j = i + 1; j < size; j++) {
      if (data[j] < data[min_index]) {
        min_index = j;
      }
    }
    swap(i, min_index);
  }
  display();
}

function insertionSort() {
  for (let i = 0; i < size; i++) {
    let key = data[i];
    let j = i - 1;
    while (j >= 0 && data[j] > key) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = key;
  }
  display();
}
// p: start , q: mid, r: end
function merge(array, p, q, r) {
  let n1 = q - p + 1;
  let n2 = r - q;
  let L = [];
  let R = [];
  let i = 0;
  let j = 0;
  let k = 0;

  for (i = 0; i < n1; i++) {
    L[i] = array[p + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = array[q + 1 + j];
  }
  L[n1] = -Infinity;
  R[n2] = -Infinity;
  i = 0;
  j = 0;
  k = p;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }
  /*
  console.log({
    PQR: [p, q, r],
    data: array,
    l: L,
    r: R,
  });*/
}
function mergeSort(array, p, r) {
  highlight(p,r);
  if (p < r) {
    let q = parseInt((p + r) / 2);
    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);
    merge(array, p, q, r);
  }
}

function partition(data, low, high) {
  pivot = data[high];
  i = low - 1;
  for (j = low; j <= high; j++) {
    if (data[j] < pivot) {
      i++;
      swap(i, j);
    }
  }
  swap(i + 1, high);
  console.log({ d: data, l: low, h: high, p: pivot });
  return i + 1;
}

function quickSort(data, low, high) {
  if (low < high) {
    pi = partition(data, low, high);
    quickSort(data, low, pi - 1);
    quickSort(data, pi + 1, high);
  }
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
    case "insertion":
      insertionSort();
      break;
    case "merge":
      let start = 0;
      let end = size - 1;
      let array = [...data];
      mergeSort(array, start, end);
      data = array;
      display();
      break;
    case "quick":
      quickSort(data, 0, data.length);
      display();
      break;
    default:
      alert("No such method");
  }
}
