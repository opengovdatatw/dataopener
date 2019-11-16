import styled from "styled-components";

export default styled.a`
  background: ${({ color }) => color || "#283051"};
  border-radius: 5px;
  font-size: 21px;
  color: #ffffff;
  width: 291px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  text-decoration: none;
`;
