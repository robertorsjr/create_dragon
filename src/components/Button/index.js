import React from 'react';
import { Btn, Text } from './styles';

function Button({ text, ...props }) {
  return (
    <Btn {...props}>
      <Text>{text}</Text>
    </Btn>
  );
}

export default Button;
