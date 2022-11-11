import { TitleSize } from '../interfaces';
import theme from '../theme';

const { HEADLINE } = theme;

export const setTitleFontSize = (size: TitleSize) => {
  switch (size) {
    case 'extra':
      return HEADLINE.EXTRA;
    case 'extrabold_2':
      return HEADLINE.EXTRABOLD_2;
    case 'extrabold_3':
      return HEADLINE.EXTRABOLD_3;
    case 'bold_4':
      return HEADLINE.BOLD_4;
    case 'bold_5':
      return HEADLINE.BOLD_5;
    case 'bold_6':
      return HEADLINE.BOLD_6;
    case 'semibold_7':
      return HEADLINE.SEMIBOLD_7;
    case 'medium_7':
      return HEADLINE.MEDIUM_7;
    default:
      return HEADLINE.EXTRABOLD_1;
  }
};
