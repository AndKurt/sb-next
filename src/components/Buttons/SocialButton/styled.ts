/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

import { IStyledSocialButton } from './types';

import theme from '../../../theme/theme';

const { SVG_SIZE } = theme;

export const StyledSocialButton = styled.a<IStyledSocialButton>`
  cursor: pointer;
  display: block;
  height: auto;
  margin-bottom: ${({ mb = 0 }) => `${mb}px`};
  margin-left: ${({ ml = 0 }) => `${ml}px`};
  margin-right: ${({ mr = 0 }) => `${mr}px`};
  margin-top: ${({ mt = 0 }) => `${mt}px`};

  img {
    ${SVG_SIZE.S}
  }
`;
