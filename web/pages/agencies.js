import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { Title } from "../components/Text";
import { CentralAgency, LocalAgency } from "../components/AgencyCard";
import Container from "../components/Container";

const data = [
  { title: "經濟部", type: "central" },
  { title: "內政部", type: "central" },
  { title: "國家發展委員會", type: "central" },
  { title: "交通部", type: "central" },
  { title: "經濟部能源局", type: "central" },
  { title: "衛生福利部", type: "central" },
  { title: "台灣電力股份有限公司", type: "central" },
  { title: "教育部", type: "central" },
  { title: "行政院農業委員會", type: "central" },
  { title: "行政院環境保護署", type: "central" },
  { title: "金融監督管理委員會", type: "central" },
  { title: "財政部", type: "central" },
  { title: "勞動部", type: "central" },
  { title: "法務部", type: "central" },
  { title: "行政院主計總處", type: "central" },
  { title: "司法院", type: "central" },
  { title: "行政院公共工程委員會", type: "central" },
  { title: "行政院人事行政總處", type: "central" },
  { title: "國防部", type: "central" },
  { title: "外交部", type: "central" },
  { title: "中央選舉委員會", type: "central" },
  { title: "行政院", type: "central" },
  { title: "國家通訊傳播委員會", type: "central" },
  { title: "科技部", type: "central" },
  { title: "文化部", type: "central" },
  { title: "行政院原子能委員會", type: "central" },
  { title: "總統府", type: "central" },
  { title: "考選部", type: "central" },
  { title: "原住民族委員會", type: "central" },
  { title: "立法院", type: "central" },
  { title: "財政部統計處", type: "central" },
  { title: "大陸委員會", type: "central" },
  { title: "國軍退除役官兵輔導委員會", type: "central" },
  { title: "僑務委員會", type: "central" },
  { title: "銓敘部", type: "central" },
  { title: "公平交易委員會", type: "central" },
  { title: "國立故宮博物院", type: "central" },
  { title: "海洋委員會", type: "central" },
  { title: "監察院", type: "central" },
  { title: "內政部警政署", type: "central" },
  { title: "臺灣省諮議會", type: "central" },
  { title: "中央銀行", type: "central" },
  { title: "客家委員會", type: "central" },
  { title: "臺北市政府", type: "local" },
  { title: "新北市政府", type: "local" },
  { title: "桃園市政府", type: "local" },
  { title: "新竹市政府", type: "local" },
  { title: "新竹縣政府", type: "local" },
  { title: "苗栗縣政府", type: "local" },
  { title: "臺中市政府", type: "local" },
  { title: "彰化縣政府", type: "local" },
  { title: "南投縣政府", type: "local" },
  { title: "雲林縣政府", type: "local" },
  { title: "嘉義市政府", type: "local" },
  { title: "嘉義縣政府", type: "local" },
  { title: "臺南市政府", type: "local" },
  { title: "高雄市政府", type: "local" },
  { title: "屏東縣政府", type: "local" },
  { title: "基隆市政府", type: "local" },
  { title: "宜蘭縣政府", type: "local" },
  { title: "花蓮縣政府", type: "local" },
  { title: "臺東縣政府", type: "local" },
  { title: "連江縣政府", type: "local" },
  { title: "金門縣政府", type: "local" },
  { title: "澎湖縣政府", type: "local" },
];

const TitleBox = styled.div`
  margin: 40px auto;
`;

const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -8px;
`;

export default function Index() {
  return (
    <Container>
      <TitleBox>
        <Title>機關列表</Title>
      </TitleBox>
      <Collection>
        {_.map(data, ({ title, type }) =>
          type === "central" ? (
            <CentralAgency key={title} title={title} />
          ) : (
            <LocalAgency key={title} title={title} />
          ),
        )}
      </Collection>
    </Container>
  );
}
