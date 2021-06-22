import React from 'react';
import { Btn, PlusIcon } from './styles';
import { Colors } from '../../resources';

function Fab(props) {
  return (
    <Btn {...props}>
      <PlusIcon
        name="plus"
        size={15}
        type={'font-awesome'}
        color={Colors.white}
      />
    </Btn>
  );
}

export default Fab;
