import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Container, List, Item } from './styles';
import { requestListDragons } from '../../store/ducks/list';
import {
  Button,
  EmptyList,
  Loading,
  Row,
  Separator,
  UtilBar,
} from '../../components';
import { requestDeleteDragon } from '../../store/ducks/delete';
import { Colors } from '../../resources';
import { formatDate } from '../../utils/format';

function ListDragons({ navigation }) {
  const data = useSelector(({ listDragonsState }) => listDragonsState.data);
  const loading = useSelector(
    ({ listDragonsState }) => listDragonsState.loading,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestListDragons());
  }, [dispatch]);

  async function handleDeleteDragon(id) {
    try {
      await dispatch(requestDeleteDragon(id));
    } catch (error) {
      console.warn(error);
    }
  }

  function handleEditDragon(id) {
    navigation.navigate('editDragon', {
      itemId: id,
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {data.length > 0 ? (
        <List
          data={data}
          keyExtractor={data => data.id}
          renderItem={({ item }) => (
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
                    color={Colors.softWhite}
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
          )}
        />
      ) : (
        <EmptyList />
      )}

      <Separator y={10} />
      <UtilBar navigation={navigation} />
      <Separator y={10} />
    </Container>
  );
}

export default ListDragons;
