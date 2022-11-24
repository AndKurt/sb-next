import React, { memo, useState } from 'react';

import { StyledInputRadio, StyledSwitchItem, SwitchContainer } from './styled';
import { ISwitcherButton, ISwitchItem } from './types';

const SwitchItem: React.FC<ISwitchItem> = ({ isActive, onChange, value }) => (
  <>
    <StyledSwitchItem htmlFor={value}>{value}</StyledSwitchItem>
    <StyledInputRadio type="radio" id={value} name="switchToggle" onClick={onChange} defaultChecked={isActive} />
  </>
);
const SwitcherButton: React.FC<ISwitcherButton> = ({ option1 = 'Monthly', option2 = 'Year' }) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleSetToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <SwitchContainer>
      <div>asdasd</div>
      <SwitchItem isActive={isActive} value={option1} onChange={handleSetToggle} />
      <SwitchItem isActive={!isActive} value={option2} onChange={handleSetToggle} />
    </SwitchContainer>
  );
};

export default memo(SwitcherButton);
