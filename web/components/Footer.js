import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url(/static/footer.png);
  background-position: center center;
  background-size: cover;
  height: 278px;
  display: flex;
  align-items: center;
`;

const SideBox = styled.div`
  width: 277px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  height: 205px;
  flex: 1;
  border-left: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.a`
  font-size: 18px;
  color: #ffffff;
  text-decoration: underline;
  margin-left: 30px;
`;

const TextBox = styled.div`
  padding-left: 30px;
`;

const Text = styled.div`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 18px;
`;

const Copyright = styled(Text)`
  opacity: 0.51;
  font-size: 14px;
  color: #ffffff;
`;

export default function Footer() {
  return (
    <Wrapper>
      <SideBox>
        <img src="/static/footer_logo.png" alt="logo" />
      </SideBox>
      <ContentBox>
        <Links>
          <Link href="/about">關於我們</Link>
          <Link href="/fnq">常見問答</Link>
          <Link href="/subscription">主題訂閱</Link>
          <Link href="/contact">聯絡我們</Link>
          <Link href="/facebook">臉書專頁</Link>
        </Links>
        <TextBox>
          <Text>dataopenertw@gmail.com</Text>
          <Text>
            <span>
              本網站文字、設計物及程式碼分別以 CC BY、CC BY、MIT 授權釋出。
            </span>
            <br />
            <span>
              若有任何錯誤或侵權之內容，敬請回報告知，我們將儘速改正。
            </span>
          </Text>
          <Copyright>GovDataOpener@2019</Copyright>
        </TextBox>
      </ContentBox>
      <SideBox>
        <img src="/static/powered_by.png" alt="logo" />
      </SideBox>
    </Wrapper>
  );
}
