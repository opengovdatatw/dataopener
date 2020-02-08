/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 36px;
`;

const NativeInput = styled.input`
  background: #fff;
  border: 2px solid #cedae9;
  font-family: PingFangTC-Regular;
  font-size: 16px;
  color: #969696;
  letter-spacing: 0;
  width: 100%;
  padding: 14px;
`;

const Error = styled.div`
  color: #ff3333;
  padding: 3px 0;
`;

export default function Input(props) {
  const [field, meta] = useField(props);

  return (
    <Wrapper>
      <NativeInput {...props} {...field} />
      {meta.touched && meta.error ? <Error>{`* ${meta.error}`}</Error> : null}
    </Wrapper>
  );
}
