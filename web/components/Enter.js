import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  height: 624px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  font-size: 36px;
  line-height: 48px;
  color: #283051;
  text-align: center;
  padding: 0 20px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <img src="/static/welcome.png" alt="welcome" />
      <Content>
        <span>推動政府開放資料</span>
        <br />
        <span>需要你的參與！</span>
        <Button href="/application">加入一日資料申請小幫手</Button>
      </Content>
    </Wrapper>
  );
}
