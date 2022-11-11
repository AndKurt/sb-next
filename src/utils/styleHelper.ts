import { Radius } from '../interfaces';
import theme from '../theme';

const { RADIUS } = theme;

export const setRadius = (radius: Radius = 'none') => RADIUS[radius];
