import React, { memo } from 'react';

import { StyledFooterList, StyledItem, StyledLink, StyledList, StyledTitle } from './styled';
import { IFooterList } from './types';

const FooterList: React.FC<IFooterList> = ({ title, items, mt, mr, mb, ml }) => (
  <StyledFooterList mt={mt} mr={mr} mb={mb} ml={ml}>
    <StyledTitle>{title}</StyledTitle>
    <StyledList>
      {items.map(({ to, name }) => (
        <StyledItem key={name}>
          <StyledLink to={to}>{name}</StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  </StyledFooterList>
);

export default memo(FooterList);
