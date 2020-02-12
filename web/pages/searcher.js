import _ from "lodash";
import React, { useState, useMemo, useEffect, useCallback } from "react";
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

const Loader = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export default function Search() {
  const [type, setType] = useState("requests");
  const [requestsFuse, setRequestsFuse] = useState();
  const [datasetsFuse, setDatasetsFuse] = useState();
  const [keyword, setKeyword] = useState();
  const [page, setPage] = useState(1);
  const [agencies, setAgencies] = useState([]);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    (async () => {
      const requests = await fetch("/api/requests");

      setRequestsFuse(
        new Fuse(requests, {
          keys: [
            { name: "subject", weight: 0.6 },
            { name: "category", weight: 0.2 },
            { name: "agency", weight: 0.2 },
          ],
          threshold: 0.2,
          shouldSort: true,
          minMatchCharLength: 2,
        }),
      );
      setAgencies(_.uniq(_.map(requests, "agency")));
      setReplies(_.uniq(_.map(requests, "reply")));
    })();
  }, [setRequestsFuse, setAgencies, setReplies]);

  useEffect(() => {
    (async () => {
      const datasets = await fetch("/api/datasets");

      setDatasetsFuse(
        new Fuse(datasets, {
          keys: [
            { name: "subject", weight: 0.3 },
            { name: "agency", weight: 0.2 },
            { name: "description", weight: 0.2 },
            { name: "fields", weight: 0.3 },
          ],
          threshold: 0.2,
          shouldSort: true,
          minMatchCharLength: 2,
        }),
      );
    })();
  }, [setDatasetsFuse]);

  const results = useMemo(() => {
    const fuse = { requests: requestsFuse, datasets: datasetsFuse };
    if (_.size(keyword) < 2 || !fuse) return [];
    return fuse[type].search(keyword);
  }, [type, requestsFuse, datasetsFuse, keyword, agencies, replies]);

  const onKeywordChange = useCallback(
    evt => {
      const { value } = evt.target;
      setPage(1);
      setKeyword(value);
    },
    [setKeyword],
  );

  if (!requestsFuse || !datasetsFuse) {
    return <Loader>Loading...</Loader>;
  }

  const resultByPages = _.chunk(results, 10);

  const startPage = page - 3 >= 1 ? page - 3 : 1;
  const endPage =
    startPage + 7 <= resultByPages.length
      ? startPage + 7
      : resultByPages.length;

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
            <Tab
              active={type === "requests"}
              onClick={() => {
                setPage(1);
                setType("requests");
              }}
            >
              我想要更多
            </Tab>
            <Tab
              active={type === "datasets"}
              onClick={() => {
                setPage(1);
                setType("datasets");
              }}
            >
              政府資料開放平台
            </Tab>
          </Tabs>
          <Tip>{`搜尋結果：${results.length}`}</Tip>
        </PageHeader>
        {_.map(resultByPages[page - 1], result => (
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
          <Page onClick={() => setPage(1)}>最前頁</Page>
          {_.map(_.range(startPage, endPage + 1), value => (
            <Page key={`page${value}`} onClick={() => setPage(value)}>
              {value}
            </Page>
          ))}
          <Page onClick={() => setPage(resultByPages.length)}>最末頁</Page>
        </Pages>
      </Container>
    </>
  );
}
