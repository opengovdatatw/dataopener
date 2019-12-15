import React, { useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import HeaderBar from "../components/HeaderBar";
import Text, { Tip, Legend as ComponentLegend } from "../components/Text";
import Tag from "../components/Tag";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import PageHeader from "../components/PageHeader";
import PrimaryButton from "../components/PrimaryButton";
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

export default function Index() {
  const [type] = useState("dataopen");

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
      <Container>
        <PageHeader>
          <Tabs>
            <Tab active={type === "dataopen"}>政府資料開放平台</Tab>
            <Tab active={type === "request"}>我想要更多 </Tab>
          </Tabs>
          <Tip>搜尋結果：102筆</Tip>
        </PageHeader>
        <Card>
          <CardHeader>
            <Tag>森林</Tag>
            <Tip>發布時間 2018 / 02 / 02</Tip>
          </CardHeader>
          <Legend>歷史森林火災點位歷史森林火災點位</Legend>
          <Table>
            <tr>
              <th>提供機關</th>
              <td>臺中市政府衛生局‧企劃資訊科</td>
            </tr>
            <tr>
              <th>資料集描述</th>
              <td>
                107年盛裝飲用水抽驗結果(名稱有可能會很長，固定污染源經緯度
                (名稱有可...
              </td>
            </tr>
            <tr>
              <th>欄位說明</th>
              <td>
                序號、樣品名稱、抽驗廠商名稱、廠商地址、檢驗項目1、檢驗項目2、檢驗結果
                ...
              </td>
            </tr>
          </Table>
          <PrimaryButton>詳細資料</PrimaryButton>
        </Card>
        <Card>
          <CardHeader>
            <Tag>森林</Tag>
            <Tip>發布時間 2018 / 02 / 02</Tip>
          </CardHeader>
          <Legend>歷史森林火災點位歷史森林火災點位</Legend>
          <Table>
            <tr>
              <th>提供機關</th>
              <td>臺中市政府衛生局‧企劃資訊科</td>
            </tr>
            <tr>
              <th>資料集描述</th>
              <td>
                107年盛裝飲用水抽驗結果(名稱有可能會很長，固定污染源經緯度
                (名稱有可...
              </td>
            </tr>
            <tr>
              <th>欄位說明</th>
              <td>
                序號、樣品名稱、抽驗廠商名稱、廠商地址、檢驗項目1、檢驗項目2、檢驗結果
                ...
              </td>
            </tr>
          </Table>
          <PrimaryButton>詳細資料</PrimaryButton>
        </Card>
        <Card>
          <CardHeader>
            <Tag>森林</Tag>
            <Tip>發布時間 2018 / 02 / 02</Tip>
          </CardHeader>
          <Legend>歷史森林火災點位歷史森林火災點位</Legend>
          <Table>
            <tr>
              <th>提供機關</th>
              <td>臺中市政府衛生局‧企劃資訊科</td>
            </tr>
            <tr>
              <th>資料集描述</th>
              <td>
                107年盛裝飲用水抽驗結果(名稱有可能會很長，固定污染源經緯度
                (名稱有可...
              </td>
            </tr>
            <tr>
              <th>欄位說明</th>
              <td>
                序號、樣品名稱、抽驗廠商名稱、廠商地址、檢驗項目1、檢驗項目2、檢驗結果
                ...
              </td>
            </tr>
          </Table>
          <PrimaryButton>詳細資料</PrimaryButton>
        </Card>
        <Card>
          <CardHeader>
            <Tag>森林</Tag>
            <Tip>發布時間 2018 / 02 / 02</Tip>
          </CardHeader>
          <Legend>歷史森林火災點位歷史森林火災點位</Legend>
          <Table>
            <tr>
              <th>提供機關</th>
              <td>臺中市政府衛生局‧企劃資訊科</td>
            </tr>
            <tr>
              <th>資料集描述</th>
              <td>
                107年盛裝飲用水抽驗結果(名稱有可能會很長，固定污染源經緯度
                (名稱有可...
              </td>
            </tr>
            <tr>
              <th>欄位說明</th>
              <td>
                序號、樣品名稱、抽驗廠商名稱、廠商地址、檢驗項目1、檢驗項目2、檢驗結果
                ...
              </td>
            </tr>
          </Table>
          <PrimaryButton>詳細資料</PrimaryButton>
        </Card>
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
