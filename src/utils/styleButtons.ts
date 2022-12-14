import { ButtonHeight, ButtonWidth, Direction } from '../interfaces';
import theme from '../theme';

const { BUTTON_WIDTH, BUTTON_HEIGHT } = theme;

export const setWidthButtonSize = (size: ButtonWidth = 'auto') => {
  switch (size) {
    case 'XS':
      return BUTTON_WIDTH.buttonXS;
    case 'S':
      return BUTTON_WIDTH.buttonS;
    case 'M':
      return BUTTON_WIDTH.buttonM;
    case 'L':
      return BUTTON_WIDTH.buttonL;
    case 'XL':
      return BUTTON_WIDTH.buttonXL;
    case 'input':
      return BUTTON_WIDTH.buttonInput;
    default:
      return 'auto';
  }
};

export const setHeightButtonSize = (size: ButtonHeight = 'auto') => {
  switch (size) {
    case 'XS':
      return BUTTON_HEIGHT.buttonXS;
    case 'S':
      return BUTTON_HEIGHT.buttonS;
    case 'M':
      return BUTTON_HEIGHT.buttonM;
    case 'L':
      return BUTTON_HEIGHT.buttonL;
    default:
      return 'auto';
  }
};

export const setDirection = (direction: Direction): string => {
  if (direction === 'back') {
    return 'transform: rotate(180deg);';
  }
  return '';
};
