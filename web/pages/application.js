import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/Link";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 2px solid #cedae9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin: 40px auto;
  padding: 20px;
  width: 100%;
  max-width: 800px;
`;

const Flow = styled.div`
  margin: 10px 0;
`;

const Tip = styled.div`
  font-size: 14px;
  color: #35c9fe;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    background: #35c9fe;
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 14px;
    margin: 3px;
    margin-right: 10px;
  }
`;

const Welcome = styled.div`
  margin: 40px 0;
  font-size: 18px;
  color: #283051;
`;

const Steps = styled.div`
  width: 695px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Step = styled.div`
  width: 20%;
  text-align: center;
  font-size: 18px;
  color: #283051;
`;

const Button = styled(PrimaryButton)`
  margin: 20px auto;
  display: block;
  width: 140px;
  text-align: center;
`;

export default function Index() {
  return (
    <>
      <Card>
        <Welcome>
          <p>你希望政府開放什麼資料呢？</p>
          <p>請跟著我們的腳步，一步步完成各個關卡。</p>
          <p>祝你申請順利！</p>
        </Welcome>
        <Flow>
          <img src="/static/application_flow.png" alt="flow" />
        </Flow>
        <Steps>
          <Step>提出資料申請</Step>
          <Step>收到確認信</Step>
          <Step>15天內收到機關回覆及滿意度調查</Step>
          <Step>加入一日資料申請小幫手</Step>
          <Step>訂閱更新通知</Step>
        </Steps>
        <Tip>可由資料小幫手完成的項目</Tip>
      </Card>
      <Button href="/requisition">出發吧！</Button>
    </>
  );
}
