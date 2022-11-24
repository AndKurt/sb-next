import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { IStyledFooterList } from './types';

import { setMargins, setParagraphFontSize, setTextColor, setTitleFontSize } from '../../../utils';

export const StyledFooterList = styled.div<IStyledFooterList>`
  ${({ mt, ml, mr, mb }) => setMargins(mt, mr, mb, ml)};
  max-width: 233px;
  width: 100%;
`;

export const StyledTitle = styled.h3`
  ${setTitleFontSize('bold_6')};
  color: ${setTextColor('WHITE')};
  margin-bottom: 31px;
`;

export const StyledList = styled.ul`
  padding: 0;
  li:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const StyledItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  color: ${setTextColor('GREY')};
  text-decoration: none;
  ${setParagraphFontSize('regular_3')};
`;
