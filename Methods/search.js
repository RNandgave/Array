function linearSearch(num) {
  let flag = false;
  let indexes = [];
  let i = 0;
  for (i = 0; i < size; i++) {
    if (num == data[i]) {
      indexes.push(i);
      flag = true;
    }
  }
  for (i = 0; i < indexes.length; i++) {
    document.getElementById(".pair>" + indexes[i]).style.backgroundColor = "red";
  }
}

function binarySearch(num) {
  bubbleSort();
  let flag = false;
  let start = 0;
  let end = data.length;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + (end - 1)) / 2);
    if (data[mid] == num) {
      flag = true;
      break;
    } else if (data[mid] < num) {
      start = mid + 1;
    } else end = mid - 1;
  }
  flag == true
    ? (document.getElementById("" + mid).style.backgroundColor = "red")
    : alert("Not Found");
}

function jumpSearch(n) {
  console.log("before Sort");
  insertionSort();
  console.log("after sort");
  let curr = 0;
  let step = parseInt(Math.floor(Math.sqrt(size)));
  flag = false;

  while (data[step] < n && curr < size) {
    curr = step;
    step += step;
    console.log({ current: data[curr], size: step });
    if (step > size - 1) {
      step = size;
      break;
    }
  }
  let i = 0;
  for (i = curr; i < step; i++) {
    if (data[i] == n) {
      flag = true;
      break;
    }
  }
  flag
    ? (document.getElementById("" + i).style.backgroundColor = "red")
    : alert("Not Found");
}

//If array is highly skewed then its not possible to search through
function interpolationSearch(n) {
  bubbleSort();
  let lo = 0;
  let hi = size - 1;
  let flag = false;
  let k = 0;
  while (lo <= hi && n >= data[lo] && n <= data[hi]) {
    if (k > 10) {
      break;
    }
    k++;
    if (lo == hi) {
      if (data[lo] == n) {
        flag = true;
      } else {
        break;
      }
    }
    let numer = hi - lo;
    let denom = data[hi] - data[lo];
    let exten = n - data[lo];
    pos = Math.ceil((numer / denom) * exten);
    console.log({ h: hi, l: lo, po: pos });

    if (data[pos] == n) {
      flag = true;
      break;
    } else if (data[pos] < n) {
      lo = pos + 1;
    } else {
      hi = pos - 1;
    }
  }
  flag
    ? (document.getElementById("" + pos).style.backgroundColor = "red")
    : alert("Not Found");
}

function search() {
  const op = document.querySelector(".searchMethods").value;
  const num = parseInt(document.querySelector(".number").value);

  switch (op) {
    case "linear":
      linearSearch(num);
      break;
    case "binary":
      binarySearch(num);
      break;
    case "jump":
      jumpSearch(num);
      break;
    case "interpolation":
      interpolationSearch(num);
      break;
    default:
      alert("Method not found");
  }
}
