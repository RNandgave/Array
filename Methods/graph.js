let myChart = document.getElementById("myChart").getContext("2d");
let oldData = [10, 10, 10, 10, 10, 10];
let label = [];

let indiceChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Array",
        data: oldData,
        borderColor: "rgb(0,199,23",
        backgroundColor: "black",
      },
    ],
  },
  options: {},
});

function updateChart() {
  for (let i = 0; i < size; i++) {
    label.concat(i + 1 + "");
  }
  console.log({ L: label, d: data });

  indiceChart.data.datasets[0].data = data;
  indiceChart.data.labels = label;
  indiceChart.update();
}
