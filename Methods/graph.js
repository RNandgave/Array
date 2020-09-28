let myChart = document.getElementById("myChart").getContext("2d");
let oldData = [10, 10, 10, 10, 10, 10];
let label = [];

let indiceChart = new Chart(myChart, {
  type: "line",
  data: {
    labels: chartLabels, //["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Array",
        data: oldData,
        borderColor: "rgb(0,199,23)",
        backgroundColor: "black",
        borderWidth: 2,
        barThickness: 3,
      },
    ],
  },
  options: {},
});

function updateChart() {
  indiceChart.data.datasets[0].data = data;
  indiceChart.data.labels.push(label);
  indiceChart.update();
}
