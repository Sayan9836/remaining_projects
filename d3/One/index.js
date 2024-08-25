d3.select("h2").style("font-size", "10px");

const data = ["dataOne", "dataTwo", "dataThree", "dataFour"];

d3.select("ul")
  .selectAll("li")
  .data(data)
  .enter()
  .append("li")
  .text((ele) => ele);

const DUMMY_DATA = [
  { id: 1, value: 10, country: "USA" },
  { id: 2, value: 11, country: "China" },
  { id: 3, value: 12, country: "India" },
  { id: 4, value: 6, country: "Germany" },
];

const Xscale = d3
  .scaleBand()
  .domain(DUMMY_DATA?.map((data) => data.country))
  .rangeRound([0, 250]);

const Yscale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container = d3.select("svg").classed("container", true);

const bars = container
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", Xscale.bandwidth())
  .attr("height", (data) => 200 - Yscale(data.value))
  .attr("x", (data) => Xscale(data.country))
  .attr("y", (data) => Yscale(data.value))
  .attr("fill", "steelblue");
