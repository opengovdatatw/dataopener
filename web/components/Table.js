import styled from "styled-components";

export default styled.div`
  width: 100%;
  font-family: PingFangTC-Regular;
  font-size: 16px;
  color: #283051;
  letter-spacing: 0;
  text-align: left;
  border: none;
  border-collapse: collapse;
  margin: 20px 0;

  & th {
    font-family: PingFangTC-Semibold;
  }

  & th,
  & td {
    padding: 3px 0;
  }

  & th:nth-child(1),
  & td:nth-child(1) {
    width: 150px;
  }
`;
