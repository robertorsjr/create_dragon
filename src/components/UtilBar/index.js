import React from 'react';
import { Button, Row, Separator } from '../index';
import { signOut } from '../../store/ducks/login';
import { useDispatch } from 'react-redux';

const UtilBar = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Row flexDirection="row">
      <Button text="Sair" onPress={() => dispatch(signOut())} />
      <Separator y={20} />
      <Button
        text="Criar Dragão"
        onPress={() => navigation.navigate('createDragon')}
      />
    </Row>
  );
};

export default UtilBar;
