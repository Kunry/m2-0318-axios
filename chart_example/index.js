const ticker = "aapl";
const api_url = `https://api.iextrading.com/1.0/stock/${ticker}/chart`;

axios
  .get(api_url)
  .then(res => res.data)
  .then(data => data.map(e => ({ date: e.date, close: e.close })))
  .then(closes => drawChart(closes));

const drawChart = data => {
  let stockLabels = data.map(e => e.date);
  let stockPrice = data.map(e => e.close);

  let ctx = document.getElementById("myChart").getContext("2d");
  let chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: stockLabels,
      datasets: [
        {
          label: "Stock Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: stockPrice
        }
      ]
    }
  });
};
