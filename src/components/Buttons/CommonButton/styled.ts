/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

import { IStyledCommonButton } from './types';

import theme from '../../../theme/theme';
import {
  setBackgroundButton,
  setDisabledBackgroundButton,
  setDisabledColor,
  setHeightButtonSize,
  setHoverBackgroundButton,
  setHoverTextColor,
  setMargins,
  setRadius,
  setSVGColor,
  setSVGDisabledColor,
  setSVGHoverColor,
  setTextColor,
  setTitleFontSize,
  setWidthButtonSize,
} from '../../../utils';

const { TRANSITION, BOX_SHADOW, SVG_SIZE, DEVICE, SPACES } = theme;

export const StyledCommonButton = styled.button<IStyledCommonButton>`
  ${({ mt, ml, mr, mb }) => setMargins(mt, mr, mb, ml)};
  ${({ textSize = 'bold_6' }) => setTitleFontSize(textSize)};
  align-items: center;
  background: ${({ bgColor }) => setBackgroundButton(bgColor)};
  border: ${({ isBorder = false, textColor }) => (isBorder ? `1px solid ${setTextColor(textColor)}` : 'none')};
  border-radius: ${({ radius }) => setRadius(radius)};
  box-shadow: ${({ isShadow }) => (isShadow ? `${BOX_SHADOW.BUTTON}` : 'none')};
  color: ${({ textColor }) => setTextColor(textColor)};
  cursor: pointer;
  display: flex;
  height: ${({ height }) => setHeightButtonSize(height)};
  justify-content: space-around;
  padding: ${({ padding = 0 }) => `${padding}px`};
  transition: ${TRANSITION.FAST};
  width: ${({ width }) => setWidthButtonSize(width)};

  img {
    transition: ${TRANSITION.FAST};
    ${SVG_SIZE.XS}
    ${({ textColor }) => setSVGColor(textColor)};
  }

  :hover:enabled {
    background: ${({ bgColor }) => setHoverBackgroundButton(bgColor !== 'TERTIARY' ? bgColor : 'TERTIARY')};
    border: ${({ isBorder = false, textColor }) => (isBorder ? `1px solid ${setHoverTextColor(textColor)}` : 'none')};
    color: ${({ textColor }) => setHoverTextColor(textColor)};

    img {
      ${({ textColor }) => setSVGHoverColor(textColor)};
    }
  }

  :disabled {
    background: ${({ bgColor }) => setDisabledBackgroundButton(bgColor)};
    border: ${({ isBorder = false, textColor }) => (isBorder ? `1px solid ${setDisabledColor(textColor)}` : 'none')};
    box-shadow: none;
    color: ${({ textColor }) => setDisabledColor(textColor)};
    cursor: not-allowed;

    img {
      ${({ textColor }) => setSVGDisabledColor(textColor)};
    }
  }

  @media ${DEVICE.mobileM} {
    width: 100%;
    justify-content: center;

    img {
      ${SVG_SIZE.M}
      margin-right: ${SPACES[10]}px;
    }
  }
`;
