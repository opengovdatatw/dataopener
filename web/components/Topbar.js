import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #171b2a;
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

const Tab = styled.a`
  color: #fff;
  margin-left: 36px;
`;

export default function Topbar() {
  return (
    <Wrapper>
      <Logo href="/">
        <img src="/static/top_logo.png" alt="logo" />
      </Logo>
      <Tabs>
        <Tab href="/application">我要申請</Tab>
        <Tab>搜尋資料</Tab>
        <Tab>機關列表</Tab>
        <Tab>常見問答</Tab>
      </Tabs>
    </Wrapper>
  );
}
