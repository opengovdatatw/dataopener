import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import ButtonBar from "./ButtonBar";
import Label from "../Label";
import Card from "../Card";
import Text from "../Text";
import Checkbox, { Checkboxs } from "../Checkbox";
import ComponentAlert from "../Alert";

const Alert = styled(ComponentAlert)`
  margin-bottom: 36px;
`;

export default function InitiativeRequisition({ onSubmit, onBack }) {
  return (
    <>
      <NavigationBar step={1.5} />
      <Card>
        <Label>2-4. 你申請的是「政府應主動公開之資訊」嗎？ (可複選)</Label>
        <Alert>
          *
          「政府資訊公開法」明定以下資訊政府均應主動公開！這類資訊的開放可能性高。
        </Alert>
        <Text>a.【行政類】應主動公開資訊</Text>
        <Checkboxs>
          <Checkbox
            name="initiatives"
            label="政府機關之組織、職掌、地址、電話、傳真、網址及電子郵件信箱帳號(§7-3)"
            value="§7-3 政府機關之組織、職掌、地址、電話、傳真、網址及電子郵件信箱帳號"
          />
          <Checkbox
            name="initiatives"
            label="行政文書、公報、白皮書、書、狀、申請書、申請規定、證明文件、管理要點、參考手冊(§7-4)"
            value="§7-4 行政指導有關文書"
          />
          <Checkbox
            name="initiatives"
            label="合議制機關會議紀錄(§7-10)"
            value="§7-10 合議制機關之會議紀錄"
          />
          <Checkbox
            name="initiatives"
            label="施政計畫、業務統計、研究報告(§7-5)"
            value="§7-5 施政計畫、業務統計及研究報告"
          />
        </Checkboxs>
        <Text>b.【財務類】應主動公開資訊</Text>
        <Checkboxs>
          <Checkbox
            name="initiatives"
            label="預算、決算書(§7-6)"
            value="§7-6 預算及決算書"
          />
          <Checkbox
            name="initiatives"
            label="公共工程及採購書面契約(§7-8)"
            value="§7-8 書面之公共工程及採購契約"
          />
          <Checkbox
            name="initiatives"
            label="罰鍰獎金、檢舉獎金、慰問金、活動補助經費、補助款、基金、捐助、撥款、支出(§7-9)"
            value="§7-9 支付或接受之補助"
          />
          <Checkbox
            name="initiatives"
            label="施政計畫、業務統計、研究報告(§7-5)"
            value="§7-5 施政計畫、業務統計及研究報告"
          />
        </Checkboxs>
        <Text>c.【權利義務類】應主動公開資訊</Text>
        <Checkboxs>
          <Checkbox
            name="initiatives"
            label="條約、對外關係文書、法律、緊急命令、命令、法規命令、地方自治法規(§7-1)"
            value="§7-1 條約、對外關係文書、法律、緊急命令、中央法規標準法所定之命令、法規命令及地方自治法規"
          />
          <Checkbox
            name="initiatives"
            label="設置要點、作業原則、作業規定(§7-2)"
            value="§7-2 政府機關為協助下級機關或屬官統一解釋法令、認定事實、及行使裁量權，而訂頒之解釋性規定及裁量基準"
          />
          <Checkbox
            name="initiatives"
            label="請願處理結果、訴願決定(§7-7)"
            value="§7-7 請願之處理結果及訴願之決定"
          />
        </Checkboxs>
      </Card>
      <ButtonBar onSubmit={onSubmit} onBack={onBack} />
    </>
  );
}

InitiativeRequisition.propTypes = {
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
};

InitiativeRequisition.defaultProps = {
  onSubmit: _.identity,
  onBack: _.identity,
};
