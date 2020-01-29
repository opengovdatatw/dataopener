import _ from "lodash";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import fetch from "../helps/fetch";

const Wrapper = styled.div`
  height: 676px;
  padding: 20px 0;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 300px;
  height: 377px;
  display: block;
  background: url("/static/topic_box.png");
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Tipics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
`;

const Tipic = styled.div`
  width: 300px;
  height: 377px;
  display: block;
  position: relative;

  &:before {
    content: "";
    background: url("/static/topic_box_bg.png");
    width: 321px;
    height: 357px;
    display: block;
    position: absolute;
    right: -36px;
    bottom: -32px;
  }
`;

const Timestamp = styled.div`
  font-size: 14px;
  color: #283051;
  text-align: right;
  margin-top: 20px;
  padding: 0 80px;
`;

const TipicTitle = styled.div`
  font-size: 24px;
  text-align: center;
  color: #fff;
`;

const TipicValue = styled.div`
  font-size: 64px;
  text-align: center;
  padding: 20px 0;
  color: #fff;
`;

export default function TipicBlock() {
  const [tipics, setTipics] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/api/requests");
      setTipics(
        _.map(_.countBy(data, "category"), (value, tipic) => ({
          tipic,
          value,
        })).sort((a, b) => b.value - a.value),
      );
    })();
  }, []);

  return (
    <Wrapper>
      <SubTitle>年度熱門申請主題</SubTitle>
      <Tipics>
        {_.map(_.take(tipics, 4), ({ tipic, value }) => (
          <Tipic key={tipic}>
            <Content>
              <TipicTitle>{tipic}</TipicTitle>
              <TipicValue>{value}</TipicValue>
            </Content>
          </Tipic>
        ))}
      </Tipics>
      <Timestamp>更新日期: ----</Timestamp>
    </Wrapper>
  );
}
