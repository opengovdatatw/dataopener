import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 36px;
  color: #283051;
  text-align: center;
  padding: 20px 0;
`;

export default function SubTitle({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
