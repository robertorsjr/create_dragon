import React from 'react';
import { IconOut } from './styles';
import { signOut } from '../../store/ducks/login';
import { useDispatch } from 'react-redux';

function BackButton() {
  const dispatch = useDispatch();

  return <IconOut name="logout" onPress={() => dispatch(signOut())} />;
}

export default BackButton;
