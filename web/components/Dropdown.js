import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 20px;
`;

const IconBox = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  padding-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 12px;
  height: 12px;
  background-size: cover;
  background-image: url("/static/caret-down.png");
`;

const Select = styled.select`
  font-size: 16px;
  color: #283051;
  letter-spacing: 0;
`;

export default function Dropdown({ value, onChange, children }) {
  return (
    <Wrapper>
      <Select value={value} onChange={onChange}>
        {children}
      </Select>
      <IconBox>
        <Icon />
      </IconBox>
    </Wrapper>
  );
}

Dropdown.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element),
};

Dropdown.defaultProps = {
  value: undefined,
  onChange: _.identity,
  children: [],
};
