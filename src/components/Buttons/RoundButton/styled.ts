import styled from 'styled-components/macro';

import { IStyledRoundButton } from './types';

import theme from '../../../theme';

const { COLOR, HEADLINE, BUTTON_WIDTH, BUTTON_HEIGHT, RADIUS, TRANSITION, BOX_SHADOW, DEVICE } = theme;

export const StyledRoundButton = styled.button<IStyledRoundButton>`
  align-items: center;
  background: ${COLOR.PRIMARY};
  border: none;
  border-radius: ${RADIUS.FULL};
  bottom: ${({ bottom = 0 }) => `${bottom}px`};
  color: ${COLOR.WHITE};
  cursor: pointer;
  display: flex;
  height: ${BUTTON_HEIGHT.buttonRound};
  justify-content: center;
  outline: none;
  position: absolute;
  top: ${({ top = 0 }) => `${top}px`};
  transition: ${TRANSITION.FAST};
  width: ${BUTTON_WIDTH.buttonRound};
  z-index: 10;

  :before {
    background: none;
    border: 1px solid ${COLOR.WHITE};
    border-radius: ${RADIUS.FULL};
    bottom: 8px;
    content: '';
    display: block;
    left: 8px;
    pointer-events: none;
    position: absolute;
    right: 8px;
    top: 8px;
  }

  :after {
    border: 10px solid ${COLOR.WHITE};
    border-radius: ${RADIUS.FULL};
    content: '';
    height: ${BUTTON_HEIGHT.buttonRound};
    position: absolute;
    width: ${BUTTON_WIDTH.buttonRound};
    z-index: 1;
  }

  :hover {
    background: ${COLOR.PRIMARY_HOVER};
    box-shadow: ${BOX_SHADOW.BUTTON};
  }

  :active {
    background: ${COLOR.PRIMARY};
  }
  :disabled {
    background: ${COLOR.GREY};
    box-shadow: none;
  }

  @media ${DEVICE.tablet} {
    width: ${BUTTON_WIDTH.buttonRoundSmall};
    height: ${BUTTON_HEIGHT.buttonRoundSmall};

    :before {
      top: 4px;
      bottom: 4px;
      left: 4px;
      right: 4px;
    }

    :after {
      border: 5px solid ${COLOR.WHITE};
    }
  }
`;

export const TextContent = styled.p`
  ${HEADLINE.SEMIBOLD_7}
  color: ${COLOR.WHITE};
`;
