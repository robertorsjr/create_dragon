import styled from 'styled-components/native';
import { Colors } from '../../resources';
import { FlatList } from 'react-native-gesture-handler';

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
  color: ${Colors.black};
`;

const List = styled(FlatList).attrs(props => ({
  contentContainerStyle: {
    padding: 20,
  },
}))`
  width: 100%;
`;

const Item = styled.View`
  padding: 20px;
  background: ${Colors.white};
  height: 140px;
  border-radius: 10px;

  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 5px;
  }
  shadow-opacity: 0.36;
  shadow-radius: 6.68;

  elevation: 11;
`;

export { Container, Text, List, Item };
