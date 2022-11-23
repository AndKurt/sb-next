import { ParagraphSize, TitleSize } from '../interfaces';
import theme from '../theme';

const { HEADLINE, PARAGRAPH } = theme;

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

export const setParagraphFontSize = (size: ParagraphSize) => {
  switch (size) {
    case 'regular_1':
      return PARAGRAPH.REGULAR_1;
    case 'regular_2':
      return PARAGRAPH.REGULAR_2;
    case 'regular_3':
      return PARAGRAPH.REGULAR_3;
    case 'bold_2':
      return PARAGRAPH.BOLD_2;
    case 'bold_3':
      return PARAGRAPH.BOLD_3;
    default:
      return PARAGRAPH.REGULAR_1;
  }
};
