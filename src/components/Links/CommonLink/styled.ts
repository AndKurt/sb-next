import styled from 'styled-components';

import { IStyledCommonLink } from './types';

import theme from '../../../theme/theme';
import { setTitleFontSize } from '../../../utils';

const { COLOR, TRANSITION, SVG_COLORS } = theme;

export const StyledCommonLink = styled.a<IStyledCommonLink>`
  align-self: center;
  ${({ textSize = 'semibold_7' }) => setTitleFontSize(textSize)};
  color: ${COLOR.PRIMARY};
  display: inline-block;
  margin-bottom: ${({ mb = 0 }) => `${mb}px`};
  margin-left: ${({ ml = 0 }) => `${ml}px`};
  margin-right: ${({ mr = 0 }) => `${mr}px`};
  margin-top: ${({ mt = 0 }) => `${mt}px`};
  text-decoration: none;
  transition: ${TRANSITION.FAST};

  img {
    width: 14px;
    height: 8px;
    margin-left: 5px;
    ${SVG_COLORS.PRIMARY};
  }

  :hover,
  :active {
    color: ${COLOR.SECONDARY};

    img {
      ${SVG_COLORS.SECONDARY};
    }
  }
`;
