import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PieChart, Pie, Cell } from "recharts";
import { Title } from "../components/Text";
import Container from "../components/Container";
import fetch from "../helps/fetch";

const COLORS = {
  已開放: "#00B5E5",
  預計開放: "#31CD90",
  不對外開放: "#F4C040",
  未回覆: "#283051",
  其他: "#CDCDCD",
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = item => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = item;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TitleBox = styled.div`
  margin: 40px auto;
`;

export default function Agency() {
  const [replies, setReplies] = useState([]);
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    (async () => {
      const data = await fetch("/api/requests");
      const results = _.filter(data, { agency: name });

      const temps = {
        已開放: 0,
        預計開放: 0,
        不對外開放: 0,
        未回覆: 0,
        其他: 0,
      };

      _.forEach(results, ({ reply }) => {
        if (_.isUndefined(temps[reply])) {
          temps["其他"] += 1;
          return;
        }

        temps[reply] += 1;
      });

      setReplies(_.map(temps, (v, n) => ({ name: n, value: v })));
    })();
  }, [name, setReplies]);

  console.log(replies);

  return (
    <Container>
      <TitleBox>
        <Title>{name}</Title>
        <PieChart width={300} height={300}>
          <Pie
            data={replies}
            cx={150}
            cy={150}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
          >
            {replies.map(({ name: n }) => (
              <Cell key={`cell-${n}`} fill={COLORS[n]} />
            ))}
          </Pie>
        </PieChart>
      </TitleBox>
    </Container>
  );
}
