import React, { useEffect, useRef, useState } from "react";
import "./Main.css";
import { data } from "../../data";
import { scaleBand, scaleLinear, select } from "d3";
let cnt = 0;
const Main = () => {
  const [datas, setDatas] = useState(data);
  const svgRef = useRef();

  const financialValueTimeline = [
    {
      season: " ´20-´21",
      matchesPlayed: 8,
    },
    {
      season: "´21-´22",
      matchesPlayed: 10,
    },
    {
      season: "´23-´24",
      matchesPlayed: 3,
    },
    {
      season: "´22-´23",
      matchesPlayed: 6,
    },
  ];

  financialValueTimeline.sort((a, b) => a.season.localeCompare(b.season));

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleBand()
      .domain(datas.map((data) => data.name))
      .rangeRound([0, 1000]);

    const yScale = scaleLinear().domain([0, 440]).range([600, 0]);

    svg
      .selectAll(".bar")
      .data(datas)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("id", (_, index) => "bar-" + index)
      .attr("width", xScale.bandwidth())
      .attr("height", (data) => 530 - yScale(data.value))
      .attr("x", (data) => xScale(data.name))
      .attr("y", (data) => yScale(data.value));

    const yLabelScale = scaleLinear().domain([0, 100]).range([53.25, 341.25]);

    svg
      .selectAll(".line")
      .data(yLabelScale.ticks(5))
      .enter()
      .append("line")
      .classed("line", true)
      .attr("x1", 0)
      .attr("x2", 1000)
      .attr("y1", (d) => yLabelScale(d))
      .attr("y2", (d) => yLabelScale(d));

    let prevSum = 0;

    svg
      .append("text")
      .attr("x", 10)
      .attr("y", 570)
      .text(financialValueTimeline[0]?.season);

    svg
      .selectAll(".bar")
      .data(datas)
      .each((data, index) => {
        let barNo = index - prevSum + 1;
        if (barNo <= datas.length && isPresent(barNo)) {
          cnt++;
          prevSum += barNo;
          let line = svg
            .append("line")
            .classed("divider", true)
            .attr("x1", xScale(data.name) + xScale.bandwidth())
            .attr("x2", xScale(data.name) + xScale.bandwidth())
            .attr("y1", 54)
            .attr("y2", 600);

          svg
            .append("text")
            .attr("x", +line.attr("x1") + 10)
            .attr("y", 570)
            .text(financialValueTimeline[cnt]?.season);
        }
      });

    return () => {
      cnt = 0;
    };
  }, []);

  const isPresent = (currBarNo) => {
    console.log(cnt);
    console.log(financialValueTimeline[cnt]);
    return financialValueTimeline[cnt]?.matchesPlayed === currBarNo;
  };

  return (
    <div className="main">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Main;
