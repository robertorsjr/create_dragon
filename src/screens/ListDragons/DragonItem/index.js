import React from 'react';
import { Row, Separator } from '../../../components';
import { Item, Text } from '../styles';
import { formatDate } from '../../../utils/format';
import { Icon } from 'react-native-elements';
import { Colors } from '../../../resources';

const DragonItem = ({ item, handleEditDragon, handleDeleteDragon }) => {
  return (
    <Item>
      <Row flexDirection="row">
        <Row>
          <Text>Nome: {item.name}</Text>
          <Text>Tipo: {item.type}</Text>
          <Text>Criação: {formatDate(item.createdAt)}</Text>
        </Row>
        <Row flexDirection="row">
          <Icon
            name="edit"
            color={Colors.turquoise}
            onPress={() => handleEditDragon(item.id)}
          />
          <Separator x={30} />
          <Icon
            name="delete"
            color={Colors.darkRed}
            onPress={() => handleDeleteDragon(item.id)}
          />
        </Row>
      </Row>
    </Item>
  );
};

export default DragonItem;
