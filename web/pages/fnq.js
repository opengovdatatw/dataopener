import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../components/Text";
import { BeforeQuestion, AfterQuestion } from "../components/Questions";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Tabs = styled.div`
  display: flex;
  cursor: pointer;
`;

const Tab = styled.div`
  border: 1px solid #283051;
  font-size: 16px;
  color: #283051;
  text-align: center;
  padding: 6px 20px;

  ${({ active }) =>
    active &&
    `
      background: #283051;
      color: #FFFFFF;
    `}
`;

const Subjects = styled.div`
  margin-top: 26px;
  border-bottom: 2px solid #cedae9;
`;

export default function Index() {
  const [type, setType] = useState("before");
  return (
    <Body>
      <Title>常見問答</Title>
      <Content>
        <Tabs>
          <Tab active={type === "before"} onClick={() => setType("before")}>
            申請前
          </Tab>
          <Tab active={type === "after"} onClick={() => setType("after")}>
            申請後
          </Tab>
        </Tabs>
        <Subjects>
          {type === "before" && <BeforeQuestion />}
          {type === "after" && <AfterQuestion />}
        </Subjects>
      </Content>
    </Body>
  );
}
