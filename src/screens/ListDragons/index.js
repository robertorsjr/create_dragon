import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Container, List, Item } from './styles';
import { requestListDragons } from '../../store/ducks/list';
import { Button, Loading, Row, Separator } from '../../components';
import { signOut } from '../../store/ducks/login';
import { requestDeleteDragon } from '../../store/ducks/delete';
import { Colors } from '../../resources';
import { formatDate } from '../../utils/format';

function ListDragons({ navigation }) {
  const [isClicked, setClicked] = useState(false);
  const data = useSelector(({ listDragonsState }) => listDragonsState.data);
  const loading = useSelector(
    ({ listDragonsState }) => listDragonsState.loading,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestListDragons());
    setClicked(false);
  }, [dispatch, isClicked]);

  async function handleDeleteDragon(id) {
    try {
      await dispatch(requestDeleteDragon(id));
      setClicked(true);
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
      <Separator y={20} />
      <Row flexDirection="row">
        <Button text="Sair" onPress={() => dispatch(signOut())} />
        <Separator y={20} />
        <Button
          text="Criar Dragão"
          onPress={() => navigation.navigate('createDragon')}
        />
      </Row>
      <Separator y={20} />
    </Container>
  );
}

export default ListDragons;
