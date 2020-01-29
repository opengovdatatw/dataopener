import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import Fuse from "fuse.js";
import Container from "../components/Container";
import HeaderBar from "../components/HeaderBar";
import Text, { Tip, Legend as ComponentLegend } from "../components/Text";
import Tag from "../components/Tag";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import PageHeader from "../components/PageHeader";
import SecondaryButton from "../components/Link/SecondaryButton";
import Card from "../components/Card";
import Table from "../components/Table";
import Tabs, { Tab as ComponentTab } from "../components/Tabs";
import Pages, { Page } from "../components/Pages";

const Slogan = styled(Text)`
  text-align: center;
  padding: 20px 0;
`;

const Toolbar = styled.div`
  margin: 16px 0 10px 0;
`;

const Tab = styled(ComponentTab)`
  width: 200px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Legend = styled(ComponentLegend)`
  margin: 20px 0;
`;

export default function Search() {
  const [type] = useState("request");
  const [fuse, setFuse] = useState();
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios("/data/rows");
      const options = {
        keys: [
          { name: "subject", weight: 0.8 },
          { name: "category", weight: 0.2 },
          { name: "agency", weight: 0.2 },
        ],
        shouldSort: true,
        minMatchCharLength: 2,
      };

      setFuse(new Fuse(response.data.data, options));
    })();
  }, [setFuse]);

  const onKeywordChange = useCallback(
    evt => {
      const { value } = evt.target;
      setResults(value.length > 1 ? _.chunk(fuse.search(value), 100)[0] : []);
    },
    [setResults, fuse],
  );

  return (
    <>
      <HeaderBar title="搜尋資料">
        <Slogan>你想要的資料開放了嗎？若不確定，可以先搜尋一下。</Slogan>
        <SearchBar placeholder="輸入關鍵字搜尋" onChange={onKeywordChange} />
        <Toolbar>
          <Dropdown>
            <option>主管機關</option>
          </Dropdown>
          <Dropdown>
            <option>開放狀態</option>
          </Dropdown>
        </Toolbar>
      </HeaderBar>
      <Container>
        <PageHeader>
          <Tabs>
            <Tab active={type === "request"}>我想要更多 </Tab>
            <Tab active={type === "dataopen"}>政府資料開放平台</Tab>
          </Tabs>
          <Tip>搜尋結果：102筆</Tip>
        </PageHeader>
        {_.map(results, result => (
          <Card key={result.id}>
            <CardHeader>
              <Tag>{result.category}</Tag>
              <Tip>發布時間 ----</Tip>
            </CardHeader>
            <Legend>{result.subject}</Legend>
            <Table>
              <tr>
                <th>派發機關</th>
                <td>{result.agency}</td>
              </tr>
              <tr>
                <th>回應</th>
                <td>{result.reply}</td>
              </tr>
            </Table>
            <SecondaryButton>資料來源</SecondaryButton>
          </Card>
        ))}
        <Pages>
          <Page>最前頁</Page>
          <Page>1</Page>
          <Page>2</Page>
          <Page>3</Page>
          <Page>最末頁</Page>
        </Pages>
      </Container>
    </>
  );
}
