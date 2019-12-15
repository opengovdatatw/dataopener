import React from "react";
import styled from "styled-components";
import Artboard from "./Artboard";
import PrimaryButton from "./PrimaryButton";
import Button from "./Button";

const Background = styled.div`
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #171b2a;
`;

const Wrapper = styled(Artboard)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px;
  padding-right: 80px;
`;

const Logo = styled.a``;

const Tabs = styled.div`
  display: flex;
`;

const PrimaryTab = styled(PrimaryButton)`
  margin-right: 18px;
  border-radius: 18px;
`;

const Tab = styled(Button)``;

export default function Topbar() {
  return (
    <Background>
      <Wrapper>
        <Logo href="/">
          <img src="/static/top_logo.png" alt="logo" />
        </Logo>
        <Tabs>
          <PrimaryTab href="/application">我要申請</PrimaryTab>
          <Tab href="/searcher">搜尋資料</Tab>
          <Tab href="/agencies">機關列表</Tab>
          <Tab href="/fnq">常見問答</Tab>
        </Tabs>
      </Wrapper>
    </Background>
  );
}
