import React, { useState } from 'react';

import { BottomSheetActivity } from '~/components/BottomSheetActivity';
import { FlatListActivities } from '~/components/FlatListActivities';
import { Menu, MenuTypeProps } from '~/components/Menu';

import * as Sty from './styles';

export function Home() {
  const [menuOptionSelected, setMenuOptionSelected] =
    useState<MenuTypeProps>('ToDo');

  return (
    <Sty.Container>
      <Sty.Title>ToDo List</Sty.Title>

      <Menu
        optionSelected={menuOptionSelected}
        setOptionSelected={setMenuOptionSelected}
      />

      <FlatListActivities menuOptionSelected={menuOptionSelected} />

      <BottomSheetActivity />
    </Sty.Container>
  );
}
