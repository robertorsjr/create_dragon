import React, { useState } from "react";
import { Container, Text } from "./styles";
import { Image } from "react-native";
import { logo } from "../../utils/imagesUrl";
import { Input, Separator } from "../../components";
import { createDragon, deleteDragon } from "../../services/dragon";
import { Button } from "../../components";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dragons, setDragons] = useState();

  async function handleChange() {
    try {
      await createDragon({
        name: email,
        type: password,
      });
      console.warn("criou");
    } catch (error) {
      console.warn("errou");
    }
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
      <Separator y={60} />
      <Input placeholder="User" onChangeText={setEmail} value={email} />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        autoCompleteType="password"
        value={password}
      />
      <Separator y={10} />
      <Button onPress={handleChange} text={"Login"} />
    </Container>
  );
}

export default Login;
