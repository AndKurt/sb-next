import styled from 'styled-components';

import { IStyledFooterList } from './types';

import { setParagraphFontSize, setTextColor, setTitleFontSize } from '../../../utils';

export const StyledFooterList = styled.div<IStyledFooterList>`
  margin-bottom: ${({ mb = 0 }) => `${mb}px`};
  margin-left: ${({ ml = 0 }) => `${ml}px`};
  margin-right: ${({ mr = 0 }) => `${mr}px`};
  margin-top: ${({ mt = 0 }) => `${mt}px`};
  max-width: 233px;
  width: 100;
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
  color: ${setTextColor('GREY')};
  ${setParagraphFontSize('regular_3')};
  list-style: none;
`;
