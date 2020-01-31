import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import Text from "../Text";

const Wrapper = styled.a`
  flex-grow: 1;
  width: 147px;
  margin: 8px;
  cursor: pointer;
`;

const Box = styled.div`
  background: #fff;
  border: 1px solid #cedae9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled(Box)`
  height: 147px;
`;

const TextBox = styled(Box)`
  border-top: none;
  height: 73px;
  font-family: PingFangTC-Medium;
`;

const TextContainer = styled(Text)`
  font-size: 18px;
  text-align: center;
  max-width: 120px;
`;

export default function AgencyCard({ title, children }) {
  return (
    <Link href={`/agency?name=${title}`} as={`/agencies/${title}`}>
      <Wrapper>
        <IconBox>{children}</IconBox>
        <TextBox>
          <TextContainer>{title}</TextContainer>
        </TextBox>
      </Wrapper>
    </Link>
  );
}

AgencyCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

AgencyCard.defaultProps = {
  title: "",
  children: undefined,
};
