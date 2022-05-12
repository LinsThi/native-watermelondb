import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <Sty.Container {...rest}>
      <Sty.Title>{title}</Sty.Title>
    </Sty.Container>
  );
}
