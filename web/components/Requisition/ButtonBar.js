import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../Link";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  & > a {
    margin: 0 8px;
  }
`;

export default function ButtonBar({ onSubmit, onBack }) {
  return (
    <Wrapper>
      <SecondaryButton onClick={onBack}>回上一頁</SecondaryButton>
      <PrimaryButton onClick={onSubmit}>我選好了！下一步</PrimaryButton>
    </Wrapper>
  );
}

ButtonBar.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
};

ButtonBar.defaultProps = {
  onSubmit: _.identity,
  onBack: _.identity,
};
