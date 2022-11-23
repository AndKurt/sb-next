import styled from 'styled-components';

import { IStyledPriceCard } from './types';

import theme from '../../../theme';
import { setParagraphFontSize, setRadius, setSVGHoverColor, setTitleFontSize } from '../../../utils';

const { COLOR, BOX_SHADOW, TRANSITION } = theme;

export const Title = styled.h3`
  ${setTitleFontSize('bold_6')};
  margin: 0px 0px 16px 0px;
`;

export const Price = styled.h2`
  ${setTitleFontSize('bold_4')};
  font-size: 1.625rem;
  line-height: 2.5rem;
  margin: 0;
`;

export const PeriodContainer = styled.div`
  display: flex;
  height: 32px;
  justify-content: space-between;
  width: 92px;
`;

export const PriceContainer = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 0px 0px 30px 0px;
  width: 100%;
`;

export const CheckMark = styled.img`
  height: 12px;
  margin: 0px 11px 0px 0px;
  transition: ${TRANSITION.MEDIUM};
  width: 17px;
`;

export const Option = styled.div`
  align-items: center;
  ${setParagraphFontSize('regular_3')};
  display: flex;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin: 0px 0px 15px 0px;

    :last-child {
      margin: 0;
    }
  }
`;

export const StyledPriceCard = styled.div<IStyledPriceCard>`
  border-radius: ${setRadius('S')};
  box-shadow: ${BOX_SHADOW.CARD_3};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 525px;
  padding: 35px 25px;
  transition: ${TRANSITION.MEDIUM};
  width: 255px;

  :hover {
    background-color: ${COLOR.PRIMARY};
    color: ${COLOR.WHITE};

    ${CheckMark} {
      ${setSVGHoverColor('WHITE')}
    }
  }
`;
