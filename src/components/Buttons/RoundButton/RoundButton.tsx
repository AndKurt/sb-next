import React from 'react';

import { StyledRoundButton, TextContent } from './styled';
import { IRoundButton } from './types';

const RoundButton = ({ label, isDisbled = false, top, bottom, handleClick }: IRoundButton) => (
  <StyledRoundButton onClick={handleClick} top={top} bottom={bottom} disabled={isDisbled}>
    <TextContent>{label}</TextContent>
  </StyledRoundButton>
);

export default RoundButton;
