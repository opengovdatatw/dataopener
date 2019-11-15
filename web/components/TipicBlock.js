import React from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";

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

export default function TipicBlock() {
  return (
    <Wrapper>
      <SubTitle>年度熱門申請主題</SubTitle>
      <Tipics>
        <Tipic>
          <Content />
        </Tipic>
        <Tipic>
          <Content />
        </Tipic>
        <Tipic>
          <Content />
        </Tipic>
        <Tipic>
          <Content />
        </Tipic>
      </Tipics>
      <Timestamp>更新日期: 2020-01-01</Timestamp>
    </Wrapper>
  );
}
