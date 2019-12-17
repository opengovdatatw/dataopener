import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import ButtonBar from "./ButtonBar";
import Label from "../Label";
import Card from "../Card";
import Text from "../Text";
import ComponentAlert from "../Alert";
import Input from "../Input";

const Alert = styled(ComponentAlert)`
  margin-bottom: 36px;
`;

const Textarea = styled(Input)`
  margin: 10px 0;
`;

export default function RecommendRequisition({ onSubmit, onBack }) {
  return (
    <>
      <NavigationBar step={1.8} />
      <Card>
        <Label>2-6. 其他你認為有力的原因 (申論題)？</Label>
        <Alert>
          *
          其他有力的原因，例如之前有人申請過，機關一直沒有回覆或開放；或是和最近的時事有關，或有應用開發的可能等，都可以提供給機關參酌。
        </Alert>
        <Text>（你申請的資料若沒有其他有力的原因，請在欄位填「無」）</Text>
        <Textarea name="recommend" />
      </Card>
      <ButtonBar onSubmit={onSubmit} onBack={onBack} />
    </>
  );
}

RecommendRequisition.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
};

RecommendRequisition.defaultProps = {
  onSubmit: _.identity,
  onBack: _.identity,
};
