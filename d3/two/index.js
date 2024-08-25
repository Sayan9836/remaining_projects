// const xSize = 500;
// const ySize = 500;
// const margin = 40;
// const xMax = xSize - margin * 2;
// const yMax = ySize - margin * 2;

// const data = [];

// for (let index = 0; index < 100; index++) {
//   data.push([Math.random() * xMax, Math.random() * yMax]);
// }

// const svg = d3
//   .select("#myPlot")
//   .append("svg")
//   .append("g")
//   .attr("transform", `translate(${margin}, ${margin})`);

// x - axis

// const x = d3.scaleLinear().domain([0, 500]).range([0, xMax]);

// svg
//   .append("g")
//   .attr("transform", `translate(0, ${yMax})`)
//   .call(d3.axisBottom(x).tickValues(d3.range(0, 501, 100)));

// y axis

// const y = d3.scaleLinear().domain([0, 500]).range([yMax, 0]);

// svg.append("g").call(d3.axisLeft(y).ticks(5));

// dots

// svg
//   .append("g")
//   .selectAll("dots")
//   .data(data)
//   .enter()
//   .append("circle")
//   .attr("cx", (data) => data[0])
//   .attr("cy", (data) => data[1])
//   .attr("r", 2)
//   .attr("fill", "red");

//**************************************************************************************************************** */

// const y = d3
//   .scaleTime()
//   .domain([new Date(0), new Date(500 * 60 * 1000)]) // Set the domain to 0 and 500 minutes
//   .range([yMax, 0]);

// svg
//   .append("g")
//   .call(
//     d3
//       .axisLeft(y)
//       .ticks(d3.timeMinute.every(20))
//       .tickFormat(d3.timeFormat("%M:%S")),
//   );

// const start = new Date("2024, 02, 01");
// const end = new Date("2024, 03, 01");

// console.log(d3.timeDay.count(start, end));
// console.log(
//   d3.timeDay
//     .range(start, end)
//     .map((time) => time.getDay())
//     .sort(),
// );

// var myData = [1, 2];
// console.log(myData);

// d3.select("body")
//   .selectAll("p")
//   .data(myData)
//   .text((data) => data)
//   .exit()
//   .remove();

// var lineData = [
//   { x: 1, y: 5 },
//   { x: 20, y: 20 },
//   { x: 40, y: 10 },
//   { x: 60, y: 40 },
//   { x: 80, y: 5 },
//   { x: 100, y: 60 },
// ];

// //The SVG Container

// var svgContainer = d3
//   .select("body")
//   .append("svg")
//   .attr("width", 200)
//   .attr("height", 200)
//   .style("border", "1px solid red");

// //This is the accessor function we talked about above

// var lineFunction = d3
//   .line()
//   .x(function (d) {
//     return d.x;
//   })
//   .y(function (d) {
//     return d.y;
//   })
//   .curve(d3.curveBasis);

// //The line SVG Path we draw
// var lineGraph = svgContainer
//   .append("path")
//   .attr("d", lineFunction(lineData))
//   .attr("stroke", "blue")
//   .attr("stroke-width", 2)
//   .attr("fill", "none");

// var data = [
//   { ORDER: 1, apples: 3840, bananas: 1920, cherries: 960 },
//   { ORDER: 2, apples: 1600, bananas: 1440, cherries: 960 },
//   { ORDER: 3, apples: 640, bananas: 960, cherries: 640 },
//   { ORDER: 4, apples: 320, bananas: 480, cherries: 640 },
// ];

// var h = 200;
// var w = 200;
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("width", w)
//   .attr("height", h)
//   .style("border", "1px solid red");
// var g = svg.append("g");

// var x = d3.scaleBand().rangeRound([0, w - 50]);
// var y = d3
//   .scaleLinear()
//   .range([h - 50, 0])
//   .domain([0, 10000]);
// var color = ["#bae4bc", "#7bccc4", "#43a2ca"];

// var stack = d3
//   .stack()
//   .keys(["apples", "bananas", "cherries"])
//   .order(d3.stackOrderNone)
//   .offset(d3.stackOffsetNone);

// var series = stack(data);

// x.domain(
//   data.map(function (d) {
//     return d.ORDER;
//   }),
// );

// g.append("g")
//   .selectAll("g")
//   .data(series)
//   .enter()
//   .append("g")
//   .attr("fill", function (d, i) {
//     return color[i];
//   })
//   .selectAll("rect")
//   .data(function (d) {
//     return d;
//   })
//   .enter()
//   .append("rect")
//   .attr("x", function (d) {
//     return x(d.data.ORDER);
//   })
//   .attr("y", function (d) {
//     return y(d[1]);
//   })
//   .attr("height", function (d) {
//     return y(d[0]) - y(d[1]);
//   })
//   .attr("width", x.bandwidth());

const imageUrl =
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713052800&semt=sph";

// Create SVG element
const svg = d3.select("#myPlot");

svg
  .append("image")
  .attr("xlink:href", imageUrl)
  .attr("width", 100)
  .attr("height", 100);
