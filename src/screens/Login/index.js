import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { Image } from 'react-native';
import { logo } from '../../utils/imagesUrl';
import { Input, Separator } from '../../components';
import { Button } from '../../components';
import { requestLogin } from '../../store/ducks/login';

function Login({ navigation }) {
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
      <Image
        style={{
          width: 400,
          height: 200,
        }}
        source={{ uri: logo }}
      />
      <Separator y={45} />
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
