import React from "react";
import styled from "styled-components";
import { Legend } from "./Text";

const Text = styled(Legend)`
  color: #ff3776;
  font-size: 16px;
  padding-right: 3px;
`;

export default function Required() {
  return <Text>*</Text>;
}
