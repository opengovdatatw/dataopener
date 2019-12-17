import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import Text from "../Text";
import Label from "../Label";
import Card from "../Card";
import ComponentLink, { PrimaryButton } from "../Link";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled(ComponentLink)`
  font-size: 15px;
  color: #0070ce;
  text-decoration: underline;
  padding: 0 2px;
`;

const Paragraph = styled.div`
  display: flex;
`;

export default function SearchRequisition({ onSubmit }) {
  return (
    <>
      <NavigationBar step={0.5} />
      <Card>
        <Label>1. 先確認你要申請的資料是否開放了</Label>
        <Paragraph>
          <Text>你想要的資料開放了嗎？若不確定，可以先</Text>
          <Link href="/searcher">搜尋</Link>
          <Text>一下</Text>
        </Paragraph>
      </Card>
      <Wrapper>
        <PrimaryButton onClick={onSubmit}>開始申請瞜！</PrimaryButton>
      </Wrapper>
    </>
  );
}

SearchRequisition.propTypes = {
  onSubmit: PropTypes.func,
};

SearchRequisition.defaultProps = {
  onSubmit: _.identity,
};
