import BottomSheet from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';

import { Button } from '~/components/Button';

import * as Sty from './styles';

export function BottomSheetActivity() {
  const [name, setName] = useState('');
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={['3%', '35%']}>
      <Sty.Form>
        <Sty.FormTitle>New</Sty.FormTitle>

        <Sty.Input
          placeholder="New activity..."
          onChangeText={setName}
          value={name}
        />

        <Button title="Save" onPress={() => {}} />
      </Sty.Form>
    </BottomSheet>
  );
}
