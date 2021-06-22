import styled from 'styled-components/native';
import { Colors } from '../../resources';

const InputText = styled.TextInput`
  height: 50px;
  width: 250px;
  border-bottom-width: 2px;
  border-color: ${Colors.grey};
  margin: 12px;
  text-align: center;
`;

export { InputText };
