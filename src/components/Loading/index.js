import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
}

export default Loading;
