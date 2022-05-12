import styled from 'styled-components/native';

type ButtonProps = {
  isActive?: boolean;
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonMenu = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ isActive }) => (isActive ? '#1F1E25' : 'transparent')};
  align-items: center;
  padding: 24px 10px;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #faf8fd;
  font-weight: bold;
  margin: 10px 30px 0px;
`;
