import styled from 'styled-components';

import { IStyledBlogCard } from './types';

import theme from '../../../theme';
import { setMargins, setParagraphFontSize, setTitleFontSize } from '../../../utils';

const { RADIUS, COLOR, DEVICE } = theme;

export const StyledImg = styled.img`
  border-radius: ${RADIUS.S};
  margin-bottom: 20px;

  @media ${DEVICE.tablet} {
    width: 160px;
    height: 96px;
    margin: 0px 6px 0px 0px;
  }
`;

export const StyledDate = styled.p`
  ${setParagraphFontSize('regular_3')}
  color: ${COLOR.GREY};
  margin: 0px 0px 12px 0px;

  @media ${DEVICE.tablet} {
    margin: 0px 0px 6px 0px;
  }
`;

export const StyledTitle = styled.h3`
  ${setTitleFontSize('bold_4')};
  margin: 0px 0px 12px 0px;

  @media ${DEVICE.tablet} {
    margin: 0px 0px 6px 0px;
    ${setTitleFontSize('semibold_7')};
  }
`;

export const StyledParagraph = styled.p`
  ${setParagraphFontSize('regular_2')}
  color: ${COLOR.GREY};
  margin: 0px 0px 12px 0px;

  @media ${DEVICE.tablet} {
    display: none;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBlogCard = styled.div<IStyledBlogCard>`
  ${({ mt, ml, mr, mb }) => setMargins(mt, mr, mb, ml)};
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;

  @media ${DEVICE.tablet} {
    max-width: 328px;
    flex-direction: row;
  }
`;
