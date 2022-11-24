import React from 'react';

import { StyledFooterList, StyledItem, StyledList, StyledTitle } from './styled';
import { IFooterList } from './types';

const FooterList: React.FC<IFooterList> = ({ title, items }) => (
  <StyledFooterList>
    <StyledTitle>{title}</StyledTitle>
    <StyledList>
      {items.map((item) => (
        <StyledItem key={item}>{item}</StyledItem>
      ))}
    </StyledList>
  </StyledFooterList>
);

export default FooterList;
