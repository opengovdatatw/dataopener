import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
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
import fetch from "../helps/fetch";

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
  const [type] = useState("requests");
  const [fuse, setFuse] = useState();
  const [agencies, setAgencies] = useState([]);
  const [replies, setReplies] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/api/requests");
      const options = {
        keys: [
          { name: "subject", weight: 0.8 },
          { name: "category", weight: 0.2 },
          { name: "agency", weight: 0.2 },
        ],
        Threshold: 0.1,
        shouldSort: true,
        minMatchCharLength: 2,
      };

      setFuse(new Fuse(data, options));
      setAgencies(_.uniq(_.map(data, "agency")));
      setReplies(_.uniq(_.map(data, "reply")));
    })();
  }, [setFuse, setAgencies, setReplies]);

  const onKeywordChange = useCallback(
    evt => {
      const { value } = evt.target;
      if (value.length < 2 || !fuse) {
        setResults([]);
        return;
      }
      setResults(fuse.search(value));
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
            {_.map(agencies, agency => (
              <option key={agency}>{agency}</option>
            ))}
          </Dropdown>
          <Dropdown>
            <option>開放狀態</option>
            {_.map(replies, reply => (
              <option key={reply}>{reply}</option>
            ))}
          </Dropdown>
        </Toolbar>
      </HeaderBar>
      <Container>
        <PageHeader>
          <Tabs>
            <Tab active={type === "requests"}>我想要更多 </Tab>
            <Tab active={type === "datasets"}>政府資料開放平台</Tab>
          </Tabs>
          <Tip>{`搜尋結果：${results.length}`}</Tip>
        </PageHeader>
        {_.map(_.chunk(results, 10)[0], result => (
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
            <SecondaryButton target="datasource" href={result.source}>
              資料來源
            </SecondaryButton>
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
