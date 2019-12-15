import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border: 2px solid #283051;
  width: 100%;
  position: relative;
`;

const Icon = styled.div`
  width: 22px;
  height: 22px;
  background-size: cover;
  background-image: url("/static/searcher.png");
  position: absolute;
  left: 18px;
  top: 14px;
`;

const Input = styled.input`
  font-size: 16px;
  color: #969696;
  letter-spacing: 0;
  width: 100%;
  padding: 14px 18px;
  padding-left: 50px;
`;

export default function SearchBar({ placeholder, value, onChange }) {
  return (
    <Wrapper>
      <Icon />
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </Wrapper>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: undefined,
  value: undefined,
  onChange: _.identity,
};
