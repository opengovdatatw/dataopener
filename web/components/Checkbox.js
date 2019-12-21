/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useField } from "formik";

const Label = styled.label`
  border: 2px solid #cedae9;
  font-family: PingFangTC-Regular;
  font-size: 16px;
  color: #3a4160;
  letter-spacing: 0;
  padding: 9px 16px;
  margin-right: 12px;
  margin-bottom: 12px;
  box-sizing: border-box;
  user-select: none;
  background: #fff;
  cursor: pointer;

  ${({ checked }) =>
    checked &&
    `
      border-color: #0070ce;
      background: #0070ce;
      color: #fff;
    `};

  & > input {
    display: none;
  }
`;

export const Checkboxs = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export default function Checkbox(props) {
  const [field] = useField({ ...props, type: "checkbox" });
  const { label, name, value } = props;
  return (
    <Label htmlFor={`${name}-${value}`} checked={field.checked}>
      <input id={`${name}-${value}`} type="checkbox" {...field} />
      {label || value}
    </Label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Checkbox.defaultProps = {
  label: "",
  name: "",
  value: null,
};
