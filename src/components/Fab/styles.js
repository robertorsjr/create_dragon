import styled from 'styled-components/native';
import { Colors } from '../../resources';
import { Icon } from 'react-native-elements';
import { Pressable } from 'react-native';

const Btn = styled(Pressable)`
  background: ${Colors.turquoise};
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  right: 10px;

  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 5px;
  }
  shadow-opacity: 0.36;
  shadow-radius: 6.68;

  elevation: 11;
`;

const PlusIcon = styled(Icon)``;

export { Btn, PlusIcon };
