import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TableContainer = styled.table`
  width: 100%;
  font-family: PingFangTC-Regular;
  font-size: 16px;
  color: #283051;
  letter-spacing: 0;
  text-align: left;
  border: none;
  border-collapse: collapse;
  margin: 20px 0;
  margin-bottom: 40px;

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

export default function Table({ children }) {
  return (
    <TableContainer>
      <tbody>{children}</tbody>
    </TableContainer>
  );
}

Table.propTypes = {
  children: PropTypes.node,
};

Table.defaultProps = {
  children: undefined,
};
