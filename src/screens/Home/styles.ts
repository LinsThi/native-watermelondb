import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #121115;
`;

export const Title = styled.Text`
  color: #faf8fd;
  font-size: 25px;
  padding: 20px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;
