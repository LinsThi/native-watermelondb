import styled from 'styled-components/native';

export const ContainerItem = styled.View`
  background-color: #201f25;
  padding: 15px 20px;
  margin-top: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ContainerButtons = styled.View``;

export const IconView = styled.View`
  background-color: #41b6a3;
  padding: 10px;

  border-radius: 5px;
`;

export const NameActivity = styled.Text`
  color: #faf8fd;
  font-size: 23px;

  margin-left: 15px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonDelete = styled.TouchableOpacity`
  margin-top: 5px;
`;

export const FlatList = styled.FlatList``;
