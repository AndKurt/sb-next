import { BackgroundColor, SVGColor, TextColor } from '../interfaces';
import theme from '../theme';

const { COLOR, SVG_COLORS } = theme;

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

export const setSVGColor = (textColor: TextColor = 'GREY') => SVG_COLORS[textColor];

export const setSVGHoverColor = (textColor: TextColor = 'WHITE') => {
  switch (textColor) {
    case 'PRIMARY':
      return SVG_COLORS.GREY;
    case 'WHITE':
      return SVG_COLORS.WHITE;
    case 'BLACK':
      return SVG_COLORS.PRIMARY;
    default:
      return SVG_COLORS.PRIMARY;
  }
};

export const setSVGDisabledColor = (textColor: SVGColor = 'WHITE') => {
  switch (textColor) {
    case 'PRIMARY':
      return SVG_COLORS.GREY;
    case 'WHITE':
      return SVG_COLORS.WHITE;
    case 'BLACK':
      return SVG_COLORS.GREY;
    case 'HELPER_BLUE_3':
      return SVG_COLORS.HELPER_BLUE_3;
    default:
      return SVG_COLORS.PRIMARY;
  }
};
