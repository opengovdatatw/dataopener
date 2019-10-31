import React from "react";
import styled from "styled-components";
import Document from "../components/Document";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = styled.div`
  flex: 1;
`;

export default function Index() {
  return (
    <Document>
      <Container>
        <Header />
        <Main>自助資料申請全攻略，讓你申請更有力。</Main>
        <Footer />
      </Container>
    </Document>
  );
}
