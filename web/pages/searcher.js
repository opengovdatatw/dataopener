import React from "react";
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import Text from "../components/Text";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";

const Slogan = styled(Text)`
  text-align: center;
  padding: 20px 0;
`;

const Toolbar = styled.div`
  margin: 16px 0 10px 0;
`;

export default function Index() {
  return (
    <>
      <HeaderBar title="搜尋資料">
        <Slogan>你想要的資料開放了嗎？若不確定，可以先搜尋一下。</Slogan>
        <SearchBar placeholder="輸入關鍵字搜尋" />
        <Toolbar>
          <Dropdown>
            <option>主管機關</option>
          </Dropdown>
          <Dropdown>
            <option>開放狀態</option>
          </Dropdown>
        </Toolbar>
      </HeaderBar>
    </>
  );
}
