/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from "react";
import styled from "styled-components";
import Document from "../components/Document";
import Container from "../components/Container";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const Body = styled.div`
  flex: 1;
  padding-top: 100px;
`;

export default function App({ Component, pageProps }) {
  return (
    <Document>
      <Container>
        <Topbar />
        <Body>
          <Component {...pageProps} />
        </Body>
        <Footer />
      </Container>
    </Document>
  );
}
