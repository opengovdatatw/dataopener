import React from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";

const Wrapper = styled.div`
  height: 577px;
  background: #f6f6f6;
  padding: 20px 0;
  box-sizing: border-box;
`;

const ReportBar = styled.div`
  background: url("/static/report_bar.png");
  background-size: cover;
  width: 1285px;
  height: 348px;
  margin: 0 auto;
`;

const Timestamp = styled.div`
  font-size: 14px;
  color: #283051;
  text-align: right;
  margin-top: 20px;
  padding: 0 80px;
`;

export default function ReportBlock() {
  return (
    <Wrapper>
      <SubTitle>開放資料累積申請數</SubTitle>
      <ReportBar />
      <Timestamp>更新日期: 2020-01-01</Timestamp>
    </Wrapper>
  );
}
