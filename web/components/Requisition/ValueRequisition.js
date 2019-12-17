import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import ButtonBar from "./ButtonBar";
import Text from "../Text";
import Label from "../Label";
import Card from "../Card";
import Checkbox from "../Checkbox";
import ComponentAlert from "../Alert";

const Alert = styled(ComponentAlert)`
  margin-bottom: 36px;
`;

const Checkboxs = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export default function ValueRequisition({ onSubmit, onBack }) {
  return (
    <>
      <NavigationBar step={1.3} />
      <Card>
        <Label>
          2-2.
          你申請的資料是否能夠產生「公共利益、經濟發展、政府透明等價值」？(可複選)
        </Label>
        <Alert>
          *
          如果是，屬於行政院「政府資料開放進階行動方案」述明機關應優先盤點開放之項目，開放可能性高。
        </Alert>
        <Text>a.【公共利益價值類】應優先開放</Text>
        <Checkboxs>
          <Checkbox name="values" value="民生安全，如食品、警政" />
          <Checkbox name="values" value="就醫用藥，如醫療、藥物" />
          <Checkbox name="values" value="財政透明，如預決算" />
          <Checkbox name="values" value="社會福利，如保險、就業" />
          <Checkbox name="values" value="統計資料，如全國統計、學術統計" />
        </Checkboxs>
        <Text>b.【濟發展價值類】應優先開放</Text>
        <Checkboxs>
          <Checkbox name="values" value="基礎建設，如交通、網路" />
          <Checkbox name="values" value="能源效率，如能源" />
          <Checkbox name="values" value="地理空間，如地圖圖資" />
          <Checkbox
            name="values"
            value="環境氣候，如氣象、空氣品質、農林漁牧"
          />
        </Checkboxs>
        <Text>c.【政府透明價值類】應優先開放</Text>
        <Checkboxs>
          <Checkbox name="values" value="民主課責，如選舉、法規" />
          <Checkbox name="values" value="研究發展，如政府研究資料" />
        </Checkboxs>
      </Card>
      <ButtonBar onSubmit={onSubmit} onBack={onBack} />
    </>
  );
}

ValueRequisition.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
};

ValueRequisition.defaultProps = {
  onSubmit: _.identity,
  onBack: _.identity,
};
