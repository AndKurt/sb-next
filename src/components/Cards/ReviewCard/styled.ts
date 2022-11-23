import styled from 'styled-components';

import { IStyledReviewCard } from './types';

import theme from '../../../theme';
import { setParagraphFontSize, setRadius, setTitleFontSize } from '../../../utils';

const { RADIUS, COLOR, DEVICE, BOX_SHADOW } = theme;

export const StyledAvatar = styled.img`
  border-radius: ${setRadius('FULL')};
  height: 80px;
  margin: 0px 25px 0px 0px;
  width: 80px;
`;

export const StyledName = styled.h2`
  ${setTitleFontSize('bold_6')};
  margin: 0px 0px 4px 0px;

  @media ${DEVICE.tablet} {
    ${setTitleFontSize('semibold_7')};
  }
`;

export const StyledPosition = styled.h2`
  color: ${COLOR.GREY};
  ${setTitleFontSize('medium_7')};
  margin: 0;

  @media ${DEVICE.tablet} {
    ${setTitleFontSize('semibold_7')};
  }
`;

export const StyledInfoContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 0px 0px 25px 0px;
  width: 100%;
`;

export const StyledParagraph = styled.p`
  color: ${COLOR.GREY};
  ${setParagraphFontSize('regular_2')}
  margin: 0;

  @media ${DEVICE.tablet} {
    ${setParagraphFontSize('regular_3')}
  }
`;

export const StyledReviewCard = styled.div<IStyledReviewCard>`
  border-radius: ${RADIUS.S};
  box-shadow: ${BOX_SHADOW.CARD_3};
  box-sizing: border-box;
  max-width: 350px;
  padding: 35px;
  width: 100%;

  @media ${DEVICE.tablet} {
    max-width: 328px;
  }
`;
