import styled from "styled-components/native";
import { Colors } from "../../resources";

const Btn = styled.TouchableOpacity`
  background: ${Colors.turquoise};
  height: 50px;
  width: 150px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: ${Colors.white};
`;

export { Btn, Text };
