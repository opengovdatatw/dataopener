import React, { useState, useMemo } from "react";
import styled from "styled-components";
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const Wrapper = styled.div`
  background: #FFFFFF;
  border: 2px solid #CEDAE9;
  border-bottom: 0;
  padding: 24px;
`;

const Title = styled.div`
  font-size: 21px;
  color: #283051;
  text-align: left;
  cursor: pointer;
  display: flex;
`;

const Text = styled.div`
  font-size: 21px;
  color: #283051;
  text-align: left;
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  align-items: center;
  user-select: none;
`;

const SwitchBox = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const Answer = styled.div`
  border-top: 2px solid #CEDAE9;
  margin-top: 24px;
  padding-top: 24px;
  font-family: PingFangTC-Regular;
  font-size: 16px;
  color: #283051;
  letter-spacing: 0;
  ${({ active }) => active ? "display: block" : "display: none"}
`;

export default function Question({ title, answer }) {
  const [active, setActive] = useState(false);
  const html = useMemo(() => md.render((answer || "").replace(/  +/g, " ")), [answer]);
  return (
    <Wrapper>
      <Title onClick={() => setActive(!active)}>
        <Text>{title}</Text>
        <SwitchBox><SwitchIcon src={`/static/chevron-circle-${active ? "up" : "down"}.png`} /></SwitchBox>
      </Title>
      <Answer active={active} dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
  );
}
