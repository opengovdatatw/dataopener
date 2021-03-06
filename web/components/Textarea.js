/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const NativeTextarea = styled.textarea`
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

export default function Textarea(props) {
  const [field] = useField(props);
  return <NativeTextarea {...props} {...field} />;
}
