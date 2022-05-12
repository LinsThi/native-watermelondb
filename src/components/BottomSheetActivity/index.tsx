import BottomSheet from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';

import { Button } from '~/components/Button';

import { MenuTypeProps } from '../Menu/index';
import { Switch } from '../ToggleSwitch';

import * as Sty from './styles';

export function BottomSheetActivity() {
  const [name, setName] = useState('');
  const [statusActivity, setstatusActivity] = useState<MenuTypeProps>('ToDo');
  const [isEnabled, setIsEnabled] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={['3%', '35%']}>
      <Sty.Form>
        <Sty.FormTitle>New</Sty.FormTitle>

        <Sty.Input
          placeholder="New activity..."
          onChangeText={setName}
          value={name}
        />

        <Switch isEnabled toggleSwitch={toggleSwitch} />

        <Button title="Save" onPress={() => {}} />
      </Sty.Form>
    </BottomSheet>
  );
}
