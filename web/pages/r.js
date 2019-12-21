import _ from "lodash";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import base58 from "../helps/base58";
import Label from "../components/Label";
import Card from "../components/Card";
import NavigationBar from "../components/Requisition/NavigationBar";

const Textarea = styled.textarea`
  background: #fff;
  border: 2px solid #cedae9;
  font-family: PingFangTC-Regular;
  font-size: 16px;
  color: #969696;
  letter-spacing: 0;
  width: 100%;
  margin-bottom: 36px;
  padding: 14px;
`;

export default function R() {
  const [data, setData] = useState("");

  useEffect(() => {
    const { search: querystring } = window.location;
    const qs = /\?data=([a-zA-Z0-9]+)/.exec(querystring);
    if (qs) {
      window.history.replaceState({}, "", `/r/${qs[1]}`);
      setData(JSON.parse(base58.decode(qs[1]).toString()));
    }
  });

  if (!data) return <div />;

  const results = [];

  const {
    dataset,
    fields,
    valuePublics,
    valueEconomics,
    valueTransparencys,
    importants,
    initiatives,
    caseAgency,
    caseName,
    caseUrl,
    recommend,
  } = data;

  const values = [];
  if (valuePublics && valuePublics.length)
    values.push(`「${valuePublics.join("、")}」相關的「公共利益價值」`);
  if (valueEconomics && valueEconomics.length)
    values.push(`「${valueEconomics.join("、")}」相關的「經濟發展價值」`);
  if (valueTransparencys && valueTransparencys.length)
    values.push(`「${valueTransparencys.join("、")}」相關的「政府透明價值」`);
  if (values && values.length) {
    const value = values.join("，及");
    results.push(
      `具有${value}，屬於行政院「政府資料開放進階行動方案」當中機關應優先盤點開放的項目。`,
    );
  }
  if (importants && importants.length) {
    const important = importants.join("、");
    results.push(
      `有助促進「${important}」，提升政府重點資訊服務，施政相關度高。`,
    );
  }
  if (initiatives && initiatives.length) {
    const initiative = _.map(initiatives, v => `「政府資訊公開法 ${v}」`).join(
      "、",
    );
    results.push(
      `依據${initiative}屬於應主動公開之政府資訊，除規定限制公開或不予提供外，機關應主動公開。`,
    );
  }

  if (caseAgency && caseName)
    results.join(
      `目前已知類似開放案例有「${caseAgency}」的「${caseName}」，網址連結請見此 (${caseUrl})，希望貴機關借鏡他人經驗，加速推動資料開放，回應民間需求。`,
    );

  return (
    <>
      <NavigationBar step={2.5} />
      <Card>
        <Label>3. 恭禧您！即將完成申請表單，請確認您的內容</Label>
        <Textarea rows="10">
          {`請開放 ${dataset} 的 ${fields} 資料，此資料需求 ${results.join(
            "且",
          )} ${recommend}`}
        </Textarea>
      </Card>
    </>
  );
}
