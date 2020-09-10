const size = data.length;

function linearSearch(num) {
  let flag = false;
  indexes = [];
  let i = 0;
  for (i = 0; i < size; i++) {
    if (num == data[i]) {
      indexes.push(i);
      flag = true;
    }
  }
  for (i = 0; i < indexes.length; i++) {
    document.getElementById("" + indexes[i]).style.backgroundColor = "red";
  }
  // console.log(flag? `element present at ${indexes}`: "Not found");
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
  console.log("Jump Search");
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
    default:
      alert("Method not found");
  }
}
