import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";
import { Title, Tip } from "../components/Text";
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

const RejectReport = styled.div`
  display: flex;
  margin: 40px auto;
`;

const ChartBox = styled.div`
  flex: 1;
  & > div {
    margin: 0 auto;
  }
`;

const LegendBox = styled.div`
  flex: 1;
  max-width: 284px;
  align-self: flex-end;
`;

const Legend = styled.div`
  width: 100%;
  display: table;
  border-color: #283051;
  border-width: 1px 0;
  border-style: solid;
  margin-bottom: 10px;
`;

const LegendItem = styled.div`
  display: table-row;
`;

const LegendIcon = styled.div`
  display: inline-block;
  background: ${({ color }) => color};
  width: 12px;
  height: 12px;
  margin-right: 10px;
`;

const LegendText = styled.div`
  display: table-cell;
  padding: 6px 0;
`;

const LegendValue = styled.div`
  display: table-cell;
  padding: 6px 0;
`;

export default function Agency() {
  const [replies, setReplies] = useState([]);
  const [rejectReasons, setRejectReasons] = useState([]);
  const router = useRouter();
  const name = router.query.name || decodeURIComponent(router.asPath.split('/').pop());

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

      const tempTags = {};

      _.forEach(results, ({ reply, tags }) => {
        if (_.isUndefined(temps[reply])) {
          temps["其他"] += 1;
          return;
        }

        temps[reply] += 1;

        if (reply === "不對外開放" && tags && tags.length) {
          tags.forEach(t => tempTags[t] = ((tempTags[t] || 0) + 1));
        }
      });

      setReplies(temps);
      setRejectReasons(_.sortBy(_.map(tempTags, (v, n) => ({ name: n, value: v })), o => -o.value));
    })();
  }, [name, setReplies]);

  return (
    <Container>
      <TitleBox>
        <Title>{name}</Title>
        <RejectReport>
          <ChartBox>
            <PieChart width={300} height={300}>
              <Pie
                data={_.map(replies, (v, n) => ({ name: n, value: v }))}
                cx={145}
                cy={145}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
              >
                {_.map(replies, (v, n) => (
                  <Cell key={`cell-${n}`} fill={COLORS[n]} />
                ))}
              </Pie>
            </PieChart>
          </ChartBox>
          <LegendBox>
            <Legend>
              <LegendItem>
                <LegendText>准駁結果</LegendText>
                <LegendValue>件數</LegendValue>
              </LegendItem>
              <LegendItem>
                <LegendText>
                  <LegendIcon color="#00B5E5" />
                  <span>已開放</span>
                </LegendText>
                <LegendValue>{replies["已開放"]}</LegendValue>
              </LegendItem>
              <LegendItem>
                <LegendText>
                  <LegendIcon color="#31CD90" />
                  <span>預計開放</span>
                </LegendText>
                <LegendValue>{replies["預計開放"]}</LegendValue>
              </LegendItem>
              <LegendItem>
                <LegendText>
                  <LegendIcon color="#F4C040" />
                  <span>不對外開放</span>
                </LegendText>
                <LegendValue>{replies["不對外開放"]}</LegendValue>
              </LegendItem>
              <LegendItem>
                <LegendText>
                  <LegendIcon color="#283051" />
                  <span>未回覆</span>
                </LegendText>
                <LegendValue>{replies["未回覆"]}</LegendValue>
              </LegendItem>
              <LegendItem>
                <LegendText>
                  <LegendIcon color="#CDCDCD" />
                  <span>其他</span>
                </LegendText>
                <LegendValue>{replies["其他"]}</LegendValue>
              </LegendItem>
            </Legend>
            <Tip>{`資料總比數：${_.sum(_.map(replies, v => v))}`}</Tip>
          </LegendBox>
        </RejectReport>
        <RejectReport>
          <ChartBox>
            <BarChart width={600} height={300} layout="vertical" maxBarSize={25}
              data={rejectReasons}
            >
              <XAxis type="number" allowDecimals={false} minTickGap={1} tickCount={Math.min(10, 2 + _.max(_.map(rejectReasons, o => o.value)))} />
              <YAxis type="category" dataKey="name" width={200} />
              <Bar dataKey="value" fill="#F4C040">
                <LabelList dataKey="value" position="right" />
              </Bar>
            </BarChart>
          </ChartBox>
        </RejectReport>
      </TitleBox>
    </Container>
  );
}
