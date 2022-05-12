import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';

import { MenuTypeProps } from '~/components/Menu';

import * as Sty from './styles';

type ArrayProps = {
  id: number;
  name: string;
  finalized: MenuTypeProps;
};

const array: ArrayProps[] = [
  {
    id: 1,
    name: 'Correr',
    finalized: 'ToDo',
  },
  {
    id: 2,
    name: 'Assistir aula',
    finalized: 'Realized',
  },
  {
    id: 3,
    name: 'Não sei mais',
    finalized: 'Realized',
  },
];

type FlatListProps = {
  menuOptionSelected: MenuTypeProps;
};

export function FlatListActivities({ menuOptionSelected }: FlatListProps) {
  const [arrayFiltred, setArrayFiltred] = useState<ArrayProps[]>([]);

  useEffect(() => {
    const arrayFilter = array.filter(
      activity => activity.finalized === menuOptionSelected,
    );

    setArrayFiltred(arrayFilter);
  }, [menuOptionSelected]);

  const renderItem = useCallback(({ item }) => {
    return (
      <Sty.ContainerItem>
        <Sty.ContainerInfo>
          <Sty.IconView>
            <MaterialCommunityIcons
              name="timer-outline"
              size={30}
              color="#fff"
            />
          </Sty.IconView>

          <Sty.NameActivity>{item.name}</Sty.NameActivity>
        </Sty.ContainerInfo>

        <Sty.ContainerButtons>
          <Sty.Button>
            <MaterialCommunityIcons name="pencil" size={20} color="#4ed4dd" />
          </Sty.Button>

          <Sty.ButtonDelete>
            <MaterialCommunityIcons name="delete" size={20} color="#dd514e" />
          </Sty.ButtonDelete>
        </Sty.ContainerButtons>
      </Sty.ContainerItem>
    );
  }, []);

  return (
    <Sty.FlatList
      data={arrayFiltred}
      extraData={arrayFiltred}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
