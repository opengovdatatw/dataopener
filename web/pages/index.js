import React from "react";
import styled from "styled-components";
import Document from "../components/Document";
import Container from "../components/Container";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        </Main>
        <Footer />
      </Container>
    </Document>
  );
}
