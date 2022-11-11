/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

import { IStyledCommonButton } from './types';

import theme from '../../../theme/theme';
import {
  setBackgroundButton,
  setDisabledBackgroundButtton,
  setDisabledColor,
  setHeightButtonSize,
  setHoverBackgroundButtton,
  setHoverTextColor,
  setTextColor,
  setTitleFontSize,
  setWidthButtonSize,
} from '../../../utils';

const { TRANSITION, BOX_SHADOW, RADIUS } = theme;

export const StyledCommonButton = styled.button<IStyledCommonButton>`
  ${({ textSize = 'bold_6' }) => setTitleFontSize(textSize)};
  align-items: center;
  background: ${({ bgColor }) => setBackgroundButton(bgColor)};

  border: ${({ isBorder = false, textColor }) => (isBorder ? `1px solid ${setTextColor(textColor)}` : 'none')};

  border-radius: ${({ radius }) => (radius ? RADIUS[radius] : 0)};
  box-shadow: ${({ isShadow }) => (isShadow ? `${BOX_SHADOW.BUTTON}` : 'none')};
  color: ${({ textColor }) => setTextColor(textColor)};
  cursor: pointer;
  display: flex;
  height: ${({ height }) => setHeightButtonSize(height)};
  justify-content: space-around;
  margin-bottom: ${({ mb = 0 }) => `${mb}px`};
  margin-top: ${({ mt = 0 }) => `${mt}px`};
  padding: ${({ padding = 0 }) => `${padding}px`};
  transition: ${TRANSITION.FAST};
  width: ${({ width }) => setWidthButtonSize(width)};

  :hover:enabled {
    background: ${({ bgColor }) => setHoverBackgroundButtton(bgColor !== 'TERTIARY' ? bgColor : 'TERTIARY')};
    border: ${({ isBorder = false, textColor }) => (isBorder ? `1px solid ${setHoverTextColor(textColor)}` : 'none')};
    color: ${({ textColor }) => setHoverTextColor(textColor)};
  }

  :disabled {
    background: ${({ bgColor }) => setDisabledBackgroundButtton(bgColor)};
    border: ${({ isBorder = false, textColor }) => (isBorder ? `1px solid ${setDisabledColor(textColor)}` : 'none')};
    box-shadow: none;
    color: ${({ textColor }) => setDisabledColor(textColor)};
    cursor: not-allowed;
  }
`;
