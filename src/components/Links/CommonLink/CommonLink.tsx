import React, { memo } from 'react';

import { StyledCommonInternalLink, StyledCommonLink } from './styled';
import { ICommonLink } from './types';

import arrowIcon from '../../../assets/svg/buttons/arrow-btn.svg';

const CommonLink: React.FC<ICommonLink> = ({ to, isInternalPath, children, withArrow, mb, ml, mr, mt }) => {
  if (isInternalPath) {
    return (
      <StyledCommonInternalLink to={to} mb={mb} ml={ml} mr={mr} mt={mt}>
        {children} {withArrow && <img src={arrowIcon} alt="arrow" />}
      </StyledCommonInternalLink>
    );
  }

  return (
    <StyledCommonLink href={to} target="_blank" rel="noreferrer" mb={mb} ml={ml} mr={mr} mt={mt}>
      {children} {withArrow && <img src={arrowIcon} alt="arrow" />}
    </StyledCommonLink>
  );
};

export default memo(CommonLink);
