import React from 'react';

import { StyledCommonLink } from './styled';
import { ICommonLink } from './types';

import arrowIcon from '../../../assets/svg/buttons/arrow-btn.svg';

const CommonLink: React.FC<ICommonLink> = ({ href, children, withArrow, mb, ml, mr, mt }) => (
  <StyledCommonLink href={href} target="_blank" rel="noreferrer" mb={mb} ml={ml} mr={mr} mt={mt}>
    {children} {withArrow && <img src={arrowIcon} alt="arrow" />}
  </StyledCommonLink>
);

export default CommonLink;
