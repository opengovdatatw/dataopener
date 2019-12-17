import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import ButtonBar from "./ButtonBar";
import Text from "../Text";
import Label from "../Label";
import Card from "../Card";
import Checkbox, { Checkboxs } from "../Checkbox";
import ComponentAlert from "../Alert";

const Alert = styled(ComponentAlert)`
  margin-bottom: 36px;
`;

export default function ImportantRequisition({ onSubmit, onBack }) {
  return (
    <>
      <NavigationBar step={1.3} />
      <Card>
        <Label>
          2-3. 你申請的資料是否屬於政府的「重點資訊服務」？ (可複選)
        </Label>
        <Alert>* 如果是，施政相關度高，開放可能性也比較高。</Alert>
        <Text>a.【經濟金融類】重點資訊服務</Text>
        <Checkboxs>
          <Checkbox name="importants" value="帶動資料開放服務產業發展" />
          <Checkbox name="importants" value="住宅貸款資訊服務" />
          <Checkbox name="importants" value="創造經濟產業商機" />
          <Checkbox name="importants" value="產業財務資訊服務" />
        </Checkboxs>
        <Text>b.【財政內政類】重點資訊服務</Text>
        <Checkboxs>
          <Checkbox name="importants" value="財政資訊透明" />
          <Checkbox name="importants" value="財政研究抽樣資料庫服務" />
          <Checkbox name="importants" value="防救資訊整合服務" />
          <Checkbox name="importants" value="擴大實價登錄資料服務" />
          <Checkbox name="importants" value="推動圖資服務平台跨域協作" />
          <Checkbox name="importants" value="選舉資料開放" />
          <Checkbox name="importants" value="普查資料活化" />
        </Checkboxs>
        <Text>c.【健康農產類】重點資訊服務</Text>
        <Checkboxs>
          <Checkbox name="importants" value="促進健康產業發展" />
          <Checkbox name="importants" value="優化生活安全及品質" />
          <Checkbox name="importants" value="校園食材安心" />
          <Checkbox name="importants" value="農產價格公開" />
        </Checkboxs>
        <Text>d.【環境交通類】重點資訊服務</Text>
        <Checkboxs>
          <Checkbox name="importants" value="落實環境知情權" />
          <Checkbox name="importants" value="民航與陸運無縫銜接服務" />
          <Checkbox name="importants" value="公共運輸整合資訊流通服務" />
        </Checkboxs>
      </Card>
      <ButtonBar onSubmit={onSubmit} onBack={onBack} />
    </>
  );
}

ImportantRequisition.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
};

ImportantRequisition.defaultProps = {
  onSubmit: _.identity,
  onBack: _.identity,
};
