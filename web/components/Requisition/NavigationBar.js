import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ComponentHeaderBar from "../HeaderBar";
import ProgressValue from "./ProgressValue";

const HeaderBar = styled(ComponentHeaderBar)`
  padding-bottom: 0;
`;

const Steps = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
`;

const Step = styled.div`
  border: 1px solid #cedae9;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div`
  background: #e6e6e6;
  height: 6px;
  display: flex;
`;

export default function NavigationBar({ step }) {
  return (
    <HeaderBar>
      <Steps>
        <Step>1. 確認資料是否已開放</Step>
        <Step>2. 填寫申請表單</Step>
        <Step>3. 確認申請表單內容</Step>
      </Steps>
      <ProgressBar>
        <ProgressValue value={step} />
        <ProgressValue value={step - 1} />
        <ProgressValue value={step - 2} />
      </ProgressBar>
    </HeaderBar>
  );
}

NavigationBar.propTypes = {
  step: PropTypes.number,
};

NavigationBar.defaultProps = {
  step: 0,
};
