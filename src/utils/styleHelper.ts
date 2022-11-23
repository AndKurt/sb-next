import { Radius, SvgSize } from '../interfaces';
import theme from '../theme';

const { RADIUS, SVG_SIZE } = theme;

export const setRadius = (radius: Radius = 'none') => RADIUS[radius];

export const setSvgSize = (size: SvgSize) => {
  switch (size) {
    case 'XS':
      return SVG_SIZE.XS;
    case 'S':
      return SVG_SIZE.S;
    case 'M':
      return SVG_SIZE.M;
    case 'L':
      return SVG_SIZE.L;
    case 'XL':
      return SVG_SIZE.XL;
    default:
      return SVG_SIZE.S;
  }
};
