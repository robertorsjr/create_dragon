import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Button, Input, Loading, Separator } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { requestCreateDragon } from '../../store/ducks/create';
import { requestUpdateDragon } from '../../store/ducks/update';

function CreateDragon({ route }) {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const data = useSelector(({ listDragonsState }) => listDragonsState.data);
  const loading = useSelector(
    ({ listDragonsState }) => listDragonsState.loading,
  );
  const dispatch = useDispatch();
  const hasItem = route.name === 'editDragon';

  useEffect(() => {
    if (hasItem) {
      const dragon = data.filter(item => item.id === route.params.itemId);
      setName(dragon[0].name);
      setType(dragon[0].type);
    }
  }, [dispatch]);

  function handleSubmit() {
    const dragon = {
      id: hasItem ? route.params.itemId : null,
      name,
      type,
    };
    if (hasItem) {
      return dispatch(requestUpdateDragon(dragon.id, dragon));
    } else {
      return dispatch(requestCreateDragon(dragon));
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Separator y={45} />
      <Input
        placeholder="Nome"
        autoCapitalize="none"
        onChangeText={setName}
        value={name}
      />
      <Input
        placeholder="Tipo"
        onChangeText={setType}
        autoCapitalize="none"
        value={type}
      />
      <Separator y={20} />
      <Button onPress={handleSubmit} text={hasItem ? 'Editar' : 'Criar'} />
    </Container>
  );
}

export default CreateDragon;
