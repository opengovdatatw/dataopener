import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "./Text";

const Wrapper = styled.div`
  background: #afeaff;
  padding: 4px 17px;
  display: inline-block;
`;

export default function Tag({ children }) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
}

Tag.propTypes = {
  children: PropTypes.string,
};

Tag.defaultProps = {
  children: "",
};
