import styled from "styled-components/native";

const Row = styled.View`
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  width: ${({ width }) => width}%;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-top: ${({ marginTop }) => marginTop}px;
`;

export default Row;
