import React from "react";
import styled from "styled-components";

const Warpper = styled.div`
  background-image: url(/static/header.png);
  background-position: center center;
  background-size: cover;
  height: 471px;
  width: 100%;
`;

const Vision = styled.div`
  background-image: url(/static/vision.png);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
`;

const Title = styled.div`
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  margin: 30px 0;
`;

const Button = styled.a`
  background: #ffffff;
  border-radius: 5px;
  font-size: 18px;
  color: #283051;
  width: 140px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export default function Header() {
  return (
    <Warpper>
      <Vision>
        <Title>自助資料申請全攻略，讓你申請更有力。</Title>
        <Button href="/application">申請資料</Button>
      </Vision>
    </Warpper>
  );
}
