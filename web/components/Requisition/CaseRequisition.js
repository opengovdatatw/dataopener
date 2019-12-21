import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import Label from "../Label";
import Card from "../Card";
import ButtonBar from "./ButtonBar";
import Input from "../Input";
import ComponentAlert from "../Alert";

const Alert = styled(ComponentAlert)`
  margin-bottom: 36px;
`;

export default function CaseRequisition({ onSubmit, onBack }) {
  return (
    <>
      <NavigationBar step={1.6} />
      <Card>
        <Label>2-5. 你申請的資料是否有「國內或國外類似的開放案例」？</Label>
        <Alert>
          * 如果有，提供給機關參考，降低開放疑慮，加速開放的腳步。
          <br />
          （你申請的資料若沒有國內外已有開放的案例，請在欄位填「無」）
        </Alert>
        <Label>類似開放案例國家或國內機關</Label>
        <Input name="caseAgency" placeholder="國內機關或其他國家名稱" />
        <Label>資料集名稱</Label>
        <Input name="caseName" placeholder="資料集名稱" />
        <Label>網址連結（網址太長者，請提供縮網址）</Label>
        <Input name="caseUrl" placeholder="國內機關或其他國家名稱" />
      </Card>
      <ButtonBar onSubmit={onSubmit} onBack={onBack} />
    </>
  );
}

CaseRequisition.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
};

CaseRequisition.defaultProps = {
  onSubmit: _.identity,
  onBack: _.identity,
};
