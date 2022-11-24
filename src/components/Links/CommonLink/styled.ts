import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { IStyledCommonLink } from './types';

import theme from '../../../theme/theme';
import { setMargins, setTitleFontSize } from '../../../utils';

const { COLOR, TRANSITION, SVG_COLORS } = theme;

export const StyledCommonLink = styled.a<IStyledCommonLink>`
  ${({ textSize = 'semibold_7' }) => setTitleFontSize(textSize)};
  ${({ mt, ml, mr, mb }) => setMargins(mt, mr, mb, ml)};
  color: ${COLOR.PRIMARY};
  display: inline-block;
  text-decoration: none;
  transition: ${TRANSITION.FAST};

  img {
    width: 14px;
    height: 8px;
    margin-left: 5px;
    ${SVG_COLORS.PRIMARY};
    transition: ${TRANSITION.FAST};
  }

  :hover,
  :active {
    color: ${COLOR.SECONDARY};

    img {
      ${SVG_COLORS.SECONDARY};
    }
  }
`;

export const StyledCommonInternalLink = styled(Link)<IStyledCommonLink>`
  ${({ textSize = 'semibold_7' }) => setTitleFontSize(textSize)};
  ${({ mt, ml, mr, mb }) => setMargins(mt, mr, mb, ml)};
  color: ${COLOR.PRIMARY};
  display: inline-block;
  text-decoration: none;
  transition: ${TRANSITION.FAST};

  img {
    width: 14px;
    height: 8px;
    margin-left: 5px;
    ${SVG_COLORS.PRIMARY};
    transition: ${TRANSITION.FAST};
  }

  :hover,
  :active {
    color: ${COLOR.SECONDARY};

    img {
      ${SVG_COLORS.SECONDARY};
    }
  }
`;
