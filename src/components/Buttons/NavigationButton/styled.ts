/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

import { IStyledNavigationButton } from './types';

import theme from '../../../theme/theme';
import { setDirection, setRadius, setSVGDisabledColor, setSVGHoverColor } from '../../../utils';

const { TRANSITION, COLOR, BUTTON_WIDTH, BUTTON_HEIGHT, SVG_SIZE, DEVICE } = theme;

export const StyledNavigationButton = styled.button<IStyledNavigationButton>`
  align-items: center;
  background: ${COLOR.TERTIARY};
  border: none;
  border-radius: ${setRadius('L')};
  cursor: pointer;
  display: flex;
  height: ${BUTTON_HEIGHT.buttonL};
  justify-content: center;
  margin-bottom: ${({ mb = 0 }) => `${mb}px`};
  margin-top: ${({ mt = 0 }) => `${mt}px`};
  transition: ${TRANSITION.FAST};
  width: ${BUTTON_WIDTH.buttonS};

  img {
    transition: ${TRANSITION.FAST};
    ${SVG_SIZE.S}
    ${({ direction }) => setDirection(direction)}
  }

  :hover:enabled {
    img {
      ${setSVGHoverColor('PRIMARY')}
    }
  }

  :disabled {
    cursor: not-allowed;

    img {
      ${setSVGDisabledColor('HELPER_BLUE_3')}
    }
  }

  @media ${DEVICE.mobileM} {
    height: 40px;
    width: 48px;
    border-radius: ${setRadius('M')};

    img {
      ${SVG_SIZE.XS}
    }
  }
`;
