import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Required from "./Required";
import { Legend } from "./Text";

const Paragraph = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Text = styled(Legend)`
  font-size: 18px;
  margin-right: 3px;
`;

export default function Label({ children, isRequired }) {
  return (
    <Paragraph>
      <Text>{children}</Text>
      {isRequired && <Required />}
    </Paragraph>
  );
}

Label.propTypes = {
  children: PropTypes.string,
  isRequired: PropTypes.bool,
};

Label.defaultProps = {
  children: undefined,
  isRequired: false,
};
