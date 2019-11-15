import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 624px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  font-size: 36px;
  color: #283051;
  text-align: center;
`;

const Button = styled.div`
  background: #283051;
  border-radius: 5px;
  font-size: 21px;
  color: #ffffff;
  width: 291px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <img src="/static/welcome.png" alt="welcome" />
      <Content>
        <span>推動政府開放資料</span>
        <br />
        <span>需要你的參與！</span>
        <Button>加入一日資料申請小幫手</Button>
      </Content>
    </Wrapper>
  );
}
