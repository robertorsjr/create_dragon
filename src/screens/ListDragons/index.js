import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List } from './styles';
import { requestListDragons } from '../../store/ducks/list';
import { EmptyList, Fab, Loading, Separator } from '../../components';
import { requestDeleteDragon } from '../../store/ducks/delete';
import DragonItem from './DragonItem';

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
    navigation.navigate('createDragon', {
      itemId: id,
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <List
        data={data.length > 0 ? data : []}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => <Separator y={20} />}
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item }) => (
          <DragonItem
            item={item}
            handleDeleteDragon={handleDeleteDragon}
            handleEditDragon={handleEditDragon}
          />
        )}
      />
      <Fab onPress={() => navigation.navigate('createDragon')} />
    </Container>
  );
}

export default ListDragons;
