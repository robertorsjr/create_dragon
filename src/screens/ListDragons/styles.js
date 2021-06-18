import styled from 'styled-components/native';

import { Colors } from '../../resources';

const Container = styled.View`
  flex: 1;
  background: ${Colors.white};
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  align-self: flex-start;
  margin-bottom: 20px;
  color: ${Colors.white};
`;

const List = styled.FlatList`
  padding: 20px;
  width: 100%;
`;

const Item = styled.View`
  padding: 20px;
  background: ${Colors.turquoise};
  height: 140px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export { Container, Text, List, Item };
