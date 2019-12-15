import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Title } from "./Text";
import Container from "./Container";

const Warpper = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  padding-top: 50px;
  padding-bottom: 22px;
`;

export default function HeaderBar({ title, children }) {
  return (
    <Warpper>
      <Container>
        {title && <Title>{title}</Title>}
        {children}
      </Container>
    </Warpper>
  );
}

HeaderBar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

HeaderBar.defaultProps = {
  title: undefined,
  children: PropTypes.node,
};
