import { Octicons } from '@expo/vector-icons';
import React from 'react';

import * as Sty from './styles';

export type MenuTypeProps = 'ToDo' | 'Realized';

type MenuProps = {
  optionSelected: string;
  setOptionSelected: (value: MenuTypeProps) => void;
};

export function Menu({ optionSelected, setOptionSelected }: MenuProps) {
  return (
    <Sty.Container>
      <Sty.ButtonMenu
        isActive={optionSelected === 'ToDo'}
        onPress={() => setOptionSelected('ToDo')}
      >
        <Octicons name="list-unordered" size={30} color="#faf8fd" />
        <Sty.TextButton>ToDo</Sty.TextButton>
      </Sty.ButtonMenu>

      <Sty.ButtonMenu
        isActive={optionSelected === 'Realized'}
        onPress={() => setOptionSelected('Realized')}
      >
        <Octicons name="checklist" size={30} color="#faf8fd" />
        <Sty.TextButton>Done</Sty.TextButton>
      </Sty.ButtonMenu>
    </Sty.Container>
  );
}
