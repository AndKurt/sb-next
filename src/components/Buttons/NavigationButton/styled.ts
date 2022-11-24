import styled from 'styled-components';

import { IStyledNavigationButton } from './types';

import theme from '../../../theme/theme';
import { setDirection, setMargins, setRadius, setSVGDisabledColor, setSVGHoverColor } from '../../../utils';

const { TRANSITION, COLOR, BUTTON_WIDTH, BUTTON_HEIGHT, SVG_SIZE, DEVICE } = theme;

export const StyledNavigationButton = styled.button<IStyledNavigationButton>`
  ${({ mt, ml, mr, mb }) => setMargins(mt, mr, mb, ml)};
  align-items: center;
  background: ${COLOR.TERTIARY};
  border: none;
  border-radius: ${setRadius('L')};
  cursor: pointer;
  display: flex;
  height: ${BUTTON_HEIGHT.buttonL};
  justify-content: center;
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
