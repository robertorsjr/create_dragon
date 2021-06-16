import styled from "styled-components/native";

const Separator = styled.View`
  height: ${props => props.y || 10}px;
  width: ${props => props.x || 10}px;
`;

export default Separator;
