import styled from 'styled-components/native';
import { Colors } from '../../resources';

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${Colors.white}
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${Colors.turquoise};
`;

export { Container, Text };
