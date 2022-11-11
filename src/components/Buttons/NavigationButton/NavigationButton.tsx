import React from 'react';

import { StyledNavigationButton } from './styled';
import { INavigationButton } from './types';

import arrowIcon from '../../../assets/svg/buttons/arrow-btn.svg';

const NavigationButton = ({ direction, isDisabled, handleClick, mt, mb }: INavigationButton) => (
  <StyledNavigationButton direction={direction} disabled={isDisabled} mt={mt} mb={mb} onClick={handleClick}>
    <img src={arrowIcon} alt={direction} />
  </StyledNavigationButton>
);

export default NavigationButton;
