let options = {
  title: { text: "Clothing Store" },
  xAxis: {
    data: ["Shirts", "Shorts", "Socks", "Shoes"],
  },
  yAxis: {},
  series: [
    {
      name: "# products",
      type: "bar",
      data: [4, 3, 5, 2],
    },
  ],
};
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    // use this JSON to find and set correct option data for the chart
  })
  .then(() => {
    // Display the chart
    myChart.setOption(options);
  });
// Initialize the echarts instance based on the prepared div
let myChart = echarts.init(document.getElementById("main"));
