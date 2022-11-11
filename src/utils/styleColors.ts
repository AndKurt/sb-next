import { BackgroundColor, TextColor } from '../interfaces';
import theme from '../theme';

const { COLOR } = theme;

export const setBackgroundButton = (color: BackgroundColor = 'WHITE') => COLOR[color];

export const setTextColor = (color: TextColor = 'BLACK') => COLOR[color];

export const setHoverBackgroundButtton = (color: BackgroundColor = 'WHITE') => {
  switch (color) {
    case 'PRIMARY':
      return COLOR.PRIMARY_HOVER;
    case 'WHITE':
      return COLOR.WHITE;
    default:
      return COLOR.TERTIARY;
  }
};

export const setHoverTextColor = (color: TextColor = 'WHITE') => {
  switch (color) {
    case 'PRIMARY':
      return COLOR.GREY;
    case 'WHITE':
      return COLOR.WHITE;
    case 'BLACK':
      return COLOR.PRIMARY;
    default:
      return COLOR.PRIMARY;
  }
};

export const setDisabledBackgroundButtton = (color: BackgroundColor = 'WHITE') => {
  switch (color) {
    case 'PRIMARY':
      return COLOR.GREY;
    case 'WHITE':
      return COLOR.WHITE;
    default:
      return COLOR.TERTIARY;
  }
};

export const setDisabledColor = (color: TextColor = 'WHITE') => {
  switch (color) {
    case 'PRIMARY':
      return COLOR.GREY;
    case 'WHITE':
      return COLOR.WHITE;
    case 'BLACK':
      return COLOR.GREY;
    default:
      return COLOR.PRIMARY;
  }
};
