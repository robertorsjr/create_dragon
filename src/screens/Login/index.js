import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Text } from './styles';
import { Input, Separator } from '../../components';
import { Button } from '../../components';
import { requestLogin } from '../../store/ducks/login';

function Login() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  async function handleChange() {
    const user = {
      login,
      password,
    };
    dispatch(requestLogin(user));
  }

  return (
    <Container>
      <Text>Create_Dragon</Text>
      <Separator y={35} />
      <Input
        placeholder="Usuário"
        autoCapitalize="none"
        onChangeText={setLogin}
        value={login}
      />
      <Input
        placeholder="Senha"
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
      />
      <Separator y={20} />
      <Button onPress={handleChange} text={'Entrar'} />
    </Container>
  );
}

export default Login;
