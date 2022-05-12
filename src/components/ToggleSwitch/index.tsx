import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

import * as Sty from './styles';

type SwitchProps = {
  isEnabled: boolean;
  toggleSwitch: () => void;
};

export function Switch({ isEnabled, toggleSwitch }: SwitchProps) {
  return (
    <Sty.Container>
      <Sty.LabelLeft>ToDo</Sty.LabelLeft>

      <ToggleSwitch
        isOn={isEnabled}
        onColor="green"
        offColor="#dcdcdc"
        size="large"
        onToggle={toggleSwitch}
      />

      <Sty.LabelRight>Realized</Sty.LabelRight>
    </Sty.Container>
  );
}
