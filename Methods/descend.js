function dbubbleSort() {
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (data[i] < data[j]) {
        swap(i, j);
      }
    }
  }
  display();
}

function dselectionSort() {
  for (let i = 0; i < size - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < size; j++) {
      if (data[j] > data[min_index]) {
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
    while (j >= 0 && data[j] < key) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = key;
  }
  display();
}
// p: start , q: mid, r: end
function dmerge(array, p, q, r) {
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
    if (L[i] >= R[j]) {
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

function dmergeSort(array, p, r) {
  highlight(p,r);
  if (p < r) {
    let q = parseInt((p + r) / 2);
    dmergeSort(array, p, q);
    dmergeSort(array, q + 1, r);
    dmerge(array, p, q, r);
  }
}

function dpartition(data, low, high) {
  pivot = data[high];
  i = low - 1;
  for (j = low; j <= high; j++) {
    if (data[j] > pivot) {
      i++;
      swap(i, j);
    }
  }
  swap(i + 1, high);
  console.log({ d: data, l: low, h: high, p: pivot });
  return i + 1;
}

function dquickSort(data, low, high) {
  if (low < high) {
    pi = dpartition(data, low, high);
    dquickSort(data, low, pi - 1);
    dquickSort(data, pi + 1, high);
  }
}

function descend() {
  const op = document.querySelector(".sortMethods").value;
  switch (op) {
    case "bubble":
      dbubbleSort();
      break;
    case "selection":
      dselectionSort();
      break;
    case "insertion":
      dinsertionSort();
      break;
    case "merge":
      dmergeSort(data, 0, size-1);
      display();
      break;
    case "quick":
      dquickSort(data, 0, size-1);
      display();
      break;
    default:
      alert("No such method");
  }
}
