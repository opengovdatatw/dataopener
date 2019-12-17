import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import ButtonBar from "./ButtonBar";
import Required from "../Required";
import Label from "../Label";
import Card from "../Card";
import Input from "../Input";
import { Tip } from "../Text";

const Paragraph = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

export default function DataRequisition({ onSubmit, onBack }) {
  return (
    <>
      <NavigationBar step={1.1} />
      <Card>
        <Paragraph>
          <Required />
          <Tip>為必填欄位</Tip>
        </Paragraph>
        <Label isRequired>2-1-1. 請輸入本次申請的主旨</Label>
        <Input
          name="title"
          placeholder="例：請開放全國歷年交通事故地點的原始資料"
        />
        <Label isRequired>2-1-2 請輸入希望開放的資料集名稱</Label>
        <Input name="dataset" placeholder="例：全國歷年交通事故地點" />
        <Label isRequired>2-1-3 請輸入希望開放的資料欄位名稱</Label>
        <Input
          name="fields"
          placeholder="例：交通事故日期、時間、肇事路段、死亡人數、受傷人數、車種、肇事因素"
        />
      </Card>
      <ButtonBar onSubmit={onSubmit} onBack={onBack} />
    </>
  );
}

DataRequisition.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
};

DataRequisition.defaultProps = {
  onSubmit: _.identity,
  onBack: _.identity,
};
