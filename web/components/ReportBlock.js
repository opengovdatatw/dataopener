import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import * as d3 from 'd3';

const D3_TEXT_COLOR = [
  "#0070ce",
  "#0070ce",
  "#283051",
  "#283051",
  "#00b79b"
];

const D3_CHART_COLOR = [
  "#35c9fe",
  "#0070ce",
  "#283051",
  "#c0c0c0",
  "#00b79b"
];

const Wrapper = styled.div`
  height: 577px;
  background: #f6f6f6;
  padding: 20px 0;
  box-sizing: border-box;
`;

const ReportBar = ({ replies }) => {
  const barChartRef = useRef(null);
  const [chart, setChartComponent] = useState(false);
  useEffect(() => {
    if (!chart && barChartRef.current) {
      const svg = d3.select(barChartRef.current)
        .append("svg")
        .attr("width", "100%")
        .attr("height", 320);
      svg.append("style").text(`
        .title {font-size: 24px}
        .number {font-size: 36px}
        `);
      setChartComponent(svg.append('g').attr("transform", "scale(1, 1)"));
    }
    if (chart && replies.length) {
      const annotationX = (d, i) => {
        const weightStart = (i !== replies.length - 1) ? 95 : 15;
        const weightEnd = 100 - weightStart;
        return `${d.startAngle * weightStart + d.endAngle * weightEnd}%`;
      };

      const annotationTransform = (x) => (d, i) => {
        return `translate(${x - (i === 0 ? 0 : 170)} 0)`;
      };
      const rect = barChartRef.current.getBoundingClientRect();
      console.log(rect);
      const transformation = d3.pie().startAngle(0.05).endAngle(0.95).value(d => d.value);
      const transformed = transformation(replies);
      const group = chart
        .selectAll('g')
        .data(transformed)
        .enter()
        .append('g');
      // Enter new D3 elements
      group.append('rect')
        .attr("width", d => `${(d.endAngle - d.startAngle) * 100}%`)
        .attr("height", 117)
        .attr("fill", (d, i) => D3_CHART_COLOR[i] || "orange")
        .attr("x", (d, i) => `${d.startAngle * 100}%`)
        .attr("y", 180)

      // annotation
      group.append('rect')
        .attr("x", annotationX)
        .attr("y", 5)
        .attr("transform", annotationTransform(0))
        .attr("width", 200)
        .attr("height", 137)
        .attr("stroke", (d, i) => D3_TEXT_COLOR[i] || "orange")
        .attr("stroke-width", 4)
        .attr("fill", "white");

      group.append('text')
        .attr("x", annotationX)
        .attr('y', 45)
        .attr("transform", annotationTransform(100))
        .attr('text-anchor', "middle")
        .attr("stroke", (d, i) => D3_TEXT_COLOR[i] || "orange")
        .attr('class', 'title')
        .text(d => d.data.label);

      group.append('text')
        .attr("x", annotationX)
        .attr('y', 100)
        .attr("transform", annotationTransform(100))
        .attr('text-anchor', "middle")
        .attr("stroke", (d, i) => D3_TEXT_COLOR[i] || "orange")
        .attr('class', 'number')
        .text(d => `${d.value}/件`);

      group.append('line')
        .attr("x1", annotationX)
        .attr("y1", 142)
        .attr("x2", annotationX)
        .attr("y2", 180)
        .attr("transform", annotationTransform(175))
        .attr("stroke", (d, i) => D3_TEXT_COLOR[i] || "orange")
        .attr("stroke-width", 4)

      group.append('circle')
        .attr("cx", annotationX)
        .attr("cy", 142)
        .attr("r", 12)
        .attr("transform", annotationTransform(175))
        .attr("fill", (d, i) => D3_TEXT_COLOR[i] || "orange");


    }
  }, [replies, barChartRef.current]);

  return (<div ref={barChartRef} style={{ marginLeft: "5%", marginRight: "5%", width: "90%" }}></div>)
}

const Timestamp = styled.div`
  font-size: 14px;
  color: #283051;
  text-align: right;
  margin-top: 20px;
  padding: 0 80px;
`;

export default function ReportBlock() {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    (async () => {
      const raw = async () => ({ "data": { "已開放": 801, "未回覆": 311, "其他": 28, "不對外開放": 1405, "預計開放": 230, "要分案一不納入計算或製作單獨頁面": 7 } });
      //      const data = await fetch("/api/requests/count-by-reply");
      const data = await raw()
        .then(res => _.transform(res.data, (a, value, label) => { a.push({ label, value }); return a; }, []))
        .then(array => array.filter(n => n.label !== '要分案一不納入計算或製作單獨頁面' && n.label !== '其他').sort((a, b) => (b.value - a.value)));
      setReplies(data);
    })();
  }, []);

  return (
    <Wrapper>
      <SubTitle>開放資料累積申請數</SubTitle>
      <ReportBar replies={replies} />
      <Timestamp>更新日期: 2020-01-01</Timestamp>
    </Wrapper>
  );
}
