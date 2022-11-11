import { css } from 'styled-components';

// Color palette
const COLOR = {
  WHITE: '#fff',
  BLACK: '#292D33',
  GREY: '#9497A1',
  PRIMARY: '#185CFF',
  PRIMARY_HOVER: '#467DFF',
  SECONDARY: '#002B4E',
  TERTIARY: '#F0F9FF',
  HELPER_BLUE_1: '#194060',
  HELPER_BLUE_2: '#607D94',
  HELPER_BLUE_3: '#C9DCEC',
  BACKGROUND: '#F1F6FA',
  RED: '#C14040',
};

// const BACKGROUND = {
//  default: COLOR.WHITE,
//  light: COLOR.BACKGROUND,
//  dark: COLOR.SECONDARY,
//  primary: COLOR.PRIMARY,
//  primaryHover: COLOR.PRIMARY_HOVER,
// };

const headlineBase = css`
  font-family: 'Manrope';
  font-style: normal;
  letter-spacing: -0.015em;
`;
const paragraphBase = css`
  font-family: 'Open Sans';
  font-style: normal;
  letter-spacing: -0.015em;
`;

// Font sizes
const FONT_SIZE = {
  XS: css`
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  S: css`
    font-size: 1rem;
    line-height: 1.75rem;
  `,
  M: css`
    font-size: 1.25rem;
    line-height: 1.875rem;
  `,
  L: css`
    font-size: 1.375rem;
    line-height: 2.0625rem;
  `,
  XL: css`
    font-size: 1.875rem;
    line-height: 2.5rem;
  `,
  XXL: css`
    font-size: 2.375rem;
    line-height: 3.5rem;
  `,
  XXXL: css`
    font-size: 2.875rem;
    line-height: 3.75rem;
  `,
  MAIN: css`
    font-size: 3.5625rem;
    line-height: 4.125rem;
  `,
  EXTRA: css`
    font-size: 3.1255rem;
    line-height: 7rem;
  `,
};

// Font weights
const FONT_WEIGHT = {
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
};

const HEADLINE = {
  EXTRA: css`
    ${paragraphBase};
    ${FONT_SIZE.EXTRA};
    font-weight: ${FONT_WEIGHT[800]};
    letter-spacing: -0.025em;
  `,
  MAIN: css`
    ${headlineBase};
    ${FONT_SIZE.MAIN};
    font-weight: ${FONT_WEIGHT[800]};
  `,
  EXTRABOLD_1: css`
    ${headlineBase};
    ${FONT_SIZE.XXXL};
    font-weight: ${FONT_WEIGHT[800]};
  `,
  EXTRABOLD_2: css`
    ${headlineBase};
    ${FONT_SIZE.XXL};
    font-weight: ${FONT_WEIGHT[800]};
  `,
  EXTRABOLD_3: css`
    ${headlineBase};
    ${FONT_SIZE.XL};
    font-weight: ${FONT_WEIGHT[800]};
  `,
  BOLD_4: css`
    ${headlineBase};
    ${FONT_SIZE.L};
    font-weight: ${FONT_WEIGHT[700]};
  `,
  BOLD_5: css`
    ${headlineBase};
    ${FONT_SIZE.M};
    font-weight: ${FONT_WEIGHT[700]};
  `,
  BOLD_6: css`
    ${headlineBase};
    ${FONT_SIZE.S}
    font-weight:${FONT_WEIGHT[800]};
    line-height: 24px;
  `,
  SEMIBOLD_7: css`
    ${headlineBase};
    ${FONT_SIZE.XS};
    font-weight: ${FONT_WEIGHT[600]};
    letter-spacing: -0.01em;
  `,
  MEDIUM_7: css`
    ${headlineBase};
    ${FONT_SIZE.XS};
    font-weight: ${FONT_WEIGHT[500]};
    letter-spacing: -0.01em;
  `,
};

const PARAGRAPH = {
  REGULAR_1: css`
    ${paragraphBase};
    ${FONT_SIZE.M};
    font-weight: ${FONT_WEIGHT[400]};
    line-height: 33px;
  `,
  REGULAR_2: css`
    ${paragraphBase};
    ${FONT_SIZE.S};
    font-weight: ${FONT_WEIGHT[400]};
  `,
  BOLD_2: css`
    ${paragraphBase};
    ${FONT_SIZE.S};
    font-weight: ${FONT_WEIGHT[700]};
  `,
  REGULAR_3: css`
    ${paragraphBase};
    ${FONT_SIZE.XS};
    font-weight: ${FONT_WEIGHT[400]};
  `,
  BOLD_3: css`
    ${paragraphBase};
    ${FONT_SIZE.XS};
    font-weight: ${FONT_WEIGHT[600]};
  `,
};

const BOX_SHADOW = {
  BUTTON: '0px 12px 30px rgba(24, 92, 255, 0.18)',
  CARD_1: '0px 2px 20px 17px rgba(24, 92, 255, 0.04)',
  CARD_2: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
  CARD_3: '0px 4px 12px rgba(12, 68, 204, 0.1)',
  DROPDOWN: '0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)',
};

// Media queries
const WIDTH = {
  navLink: '61px',
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1110px',
  desktop: '1920px',
};

// Height
const HEIGHT = {
  HEADER: '126px',
};

const BUTTON_WIDTH = {
  buttonXS: '41px',
  buttonS: '110px',
  buttonM: '168px',
  buttonL: '145px',
  buttonXL: '190px',
  buttonXXL: '210px',
  buttonRoundSmall: '89px',
  buttonRound: '120px',
};

const BUTTON_HEIGHT = {
  buttonXS: '32px',
  buttonS: '44px',
  buttonM: '54px',
  buttonL: '60px',
  buttonRoundSmall: '89px',
  buttonRound: '120px',
};

const DEVICE = {
  mobileS: `(max-width: ${WIDTH.mobileS})`,
  mobileM: `(max-width: ${WIDTH.mobileM})`,
  mobileL: `(max-width: ${WIDTH.mobileL})`,
  tablet: `(max-width: ${WIDTH.tablet})`,
  laptop: `(max-width: ${WIDTH.laptop})`,
  desktop: `(max-width: ${WIDTH.desktop})`,
};

const RADIUS = {
  S: '6px',
  M: '20px',
  FULL: '50%',
};

const SPACES = {
  0: 0,
  5: 5,
  10: 10,
  12: 12,
  15: 15,
  20: 20,
  25: 25,
  30: 30,
  35: 35,
  40: 40,
  50: 50,
  60: 60,
};

const SVG_SIZE = {
  S: css`
    height: 24px;
    width: 24px;
  `,
  M: css`
    height: 32px;
    width: 32px;
  `,
  L: css`
    height: 45px;
    width: 45px;
  `,
  XL: css`
    height: 80px;
    width: 80px;
  `,
};

const TRANSITION = {
  SLOW: '1.5s',
  MEDIUM: '0.8s',
  FAST: '0.4s',
};

const OPACITY = {
  LOW: 0.4,
  MEDIUM: 0.7,
  FULL: 1,
};

export default {
  COLOR,
  DEVICE,
  BOX_SHADOW,
  SPACES,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SVG_SIZE,
  WIDTH,
  OPACITY,
  TRANSITION,
  HEADLINE,
  PARAGRAPH,
  HEIGHT,
  // BACKGROUND,
  BUTTON_WIDTH,
  BUTTON_HEIGHT,
};
