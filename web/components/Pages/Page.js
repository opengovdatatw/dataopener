import styled from "styled-components";

export default styled.div`
  font-family: PingFangTC-Medium;
  border: 1px solid #283051;
  font-size: 14px;
  color: #283051;
  text-align: center;
  padding: 8px 10px;
  cursor: pointer;
  letter-spacing: 0;
  margin: 0 3px;

  ${({ active }) =>
    active &&
    `
      background: #283051;
      color: #FFFFFF;
    `}
`;
