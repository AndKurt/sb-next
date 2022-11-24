import React, { memo } from 'react';

import { StyledNavigationButton } from './styled';
import { INavigationButton } from './types';

import arrowIcon from '../../../assets/svg/buttons/arrow-btn.svg';

const NavigationButton = ({ direction, isDisabled, handleClick, mt, mr, mb, ml }: INavigationButton) => (
  <StyledNavigationButton
    direction={direction}
    disabled={isDisabled}
    mt={mt}
    mr={mr}
    mb={mb}
    ml={ml}
    onClick={handleClick}
  >
    <img src={arrowIcon} alt={direction} />
  </StyledNavigationButton>
);

export default memo(NavigationButton);
