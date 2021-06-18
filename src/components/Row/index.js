import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
`;

export default Row;
