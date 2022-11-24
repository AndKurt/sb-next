/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

import { IStyledSocialButton } from './types';

import theme from '../../../theme/theme';
import { setMargins } from '../../../utils';

const { SVG_SIZE } = theme;

export const StyledSocialButton = styled.a<IStyledSocialButton>`
  ${({ mt, ml, mr, mb }) => setMargins(mt, mr, mb, ml)};
  cursor: pointer;
  display: block;
  height: auto;

  img {
    ${SVG_SIZE.S}
  }
`;
