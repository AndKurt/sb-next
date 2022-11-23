import styled from 'styled-components';

import { IStyledServiceCard } from './types';

import theme from '../../../theme';
import { setParagraphFontSize, setRadius, setSvgSize, setTitleFontSize } from '../../../utils';

const { COLOR, BOX_SHADOW, DEVICE } = theme;
export const StyledParagraph = styled.p`
  color: ${COLOR.GREY};
  ${setParagraphFontSize('regular_2')}

  @media ${DEVICE.tablet} {
    ${setParagraphFontSize('regular_3')}
  }
`;

export const StyledImgContainer = styled.div`
  align-items: center;
  border: 1px solid ${COLOR.BACKGROUND};
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  height: 70px;
  justify-content: center;
  margin-bottom: 7px;
  width: 70px;

  img {
    ${setSvgSize('M')}
  }

  @media ${DEVICE.tablet} {
    border: none;

    img {
      width: 36px;
      height: 36px;
    }
  }
`;

export const StyledServiceCard = styled.div<IStyledServiceCard>`
  align-items: ${({ isCentering }) => (isCentering ? 'center' : 'flex-start')};
  border-radius: ${setRadius('S')};
  box-shadow: ${BOX_SHADOW.CARD_3};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ mb = 0 }) => `${mb}px`};
  margin-left: ${({ ml = 0 }) => `${ml}px`};
  margin-right: ${({ mr = 0 }) => `${mr}px`};
  margin-top: ${({ mt = 0 }) => `${mt}px`};
  max-width: ${({ isLargeCard }) => (isLargeCard ? '540px' : '350px')};
  padding: ${({ isCentering, isLargeCard }) => {
      if (isCentering) {
        return '35px';
      }
      if (isLargeCard) {
        return '20px';
      }
      return '45px';
    }}
    35px;
  width: 100%;

  ${StyledParagraph} {
    margin-bottom: ${({ isCentering, isLargeCard }) => {
      if (isCentering) {
        return '30px';
      }
      if (isLargeCard) {
        return '20px';
      }
      return 0;
    }};
    text-align: ${({ isCentering }) => (isCentering ? 'center' : 'left')};
  }

  ${StyledImgContainer} {
    ${({ isLargeCard }) =>
      isLargeCard &&
      `
    border: none;
    width: 84px;
    height: 70px;

    img {
      width: 100%;
      height: 100%;
    }
    `}
  }

  @media ${DEVICE.tablet} {
    padding: ${({ isLargeCard }) => {
        if (isLargeCard) {
          return '30px';
        }
        return '25px';
      }}
      25px;
  }
`;

export const StyledTitle = styled.h3`
  ${setTitleFontSize('bold_4')}
  margin-bottom: 0;

  @media ${DEVICE.tablet} {
    ${setTitleFontSize('bold_5')}
  }
`;
