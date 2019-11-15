import React from "react";
import styled from "styled-components";
import Document from "../components/Document";
import Container from "../components/Container";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubTitle from "../components/SubTitle";

const Main = styled.div`
  flex: 1;
  padding-top: 100px;
`;

export default function Index() {
  return (
    <Document>
      <Container>
        <Topbar />
        <Main>
          <Header />
          <SubTitle>年度熱門申請主題</SubTitle>
          <SubTitle>開放資料累積申請數</SubTitle>
          <SubTitle>小幫手申請成果</SubTitle>
        </Main>
        <Footer />
      </Container>
    </Document>
  );
}
