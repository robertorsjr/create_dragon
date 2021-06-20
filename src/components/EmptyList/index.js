import React from 'react';
import { Container, Text } from './styles';

function EmptyList() {
  return (
    <Container>
      <Text>Não há dragões nessa lista</Text>
      <Text>Tente criar um</Text>
    </Container>
  );
}

export default EmptyList;
