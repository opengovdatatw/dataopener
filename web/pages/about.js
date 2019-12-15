import React from "react";
import styled from "styled-components";
import { Button } from "../components/Link";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const Logo = styled.div`
  margin: 10px 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  font-size: 18px;
  color: #283051;
  line-height: 24px;

  & > p {
    margin: 10px 0;
  }
`;

const Title = styled.div`
  font-size: 36px;
  color: #283051;
  text-align: center;
  margin: 10px 0;
`;

const Slogan = styled.div`
  font-size: 24px;
  color: #283051;
  text-align: center;
`;

const Welcome = styled.div`
  margin: 40px 0;
`;

export default function Index() {
  return (
    <Body>
      <Logo>
        <img src="/static/logo_dark.png" alt="welcome" />
      </Logo>
      <Title>認識資料申請小幫手</Title>
      <Content>
        <p>
          你需要政府開放資料以便了解公共政策、監督政府，或是應用在產業發展嗎？無論個人或組織，如果希望政府開放更多資料，都可以利用政府資料開放平台的「我想要更多」專區，逕向政府申請。
        </p>
        <p>
          開放政府資料(open government
          data)是目前的國際趨勢，也是行政院推動電子化政府的重要主軸。期待透過政府資料開放，增進政府施政透明度，提升民眾生活品質，同時滿足產業界的需求。
        </p>
        <p>
          資料申請小幫手網站是由一群相信政府資訊應該公開透明並且利於各界再利用的社群參與者、倡議者、工程師、設計師合作開發，我們希望用量化統計全面呈現政府回應民眾申請的概況，並從分析民眾申請的過程，找出有助提高申請資料成功率的工具，希望幫助解決民間找資料的困境，讓開放資料真正回應人民的需求。
        </p>
      </Content>
      <Welcome>
        <img src="/static/welcome.png" alt="welcome" />
      </Welcome>
      <Slogan>推動政府開放資料，需要你的參與！</Slogan>
      <Button href="/application">加入一日資料申請小幫手</Button>
    </Body>
  );
}
