import styled from "styled-components";

export default styled.div`
  border: 1px solid #283051;
  font-size: 16px;
  color: #283051;
  text-align: center;
  padding: 6px 20px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
      background: #283051;
      color: #FFFFFF;
    `}
`;
