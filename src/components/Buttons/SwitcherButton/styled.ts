import styled from 'styled-components';

import { IStyledSwitcherContainer } from './types';

import theme from '../../../theme/theme';

const { COLOR, RADIUS } = theme;

export const SwitchContainer = styled.form<IStyledSwitcherContainer>`
  align-items: center;
  background-color: ${COLOR.TERTIARY};
  border-radius: ${RADIUS.L};
  display: flex;
  height: 46px;
  justify-content: space-between;
  width: 250px;
`;

export const StyledSwitchItem = styled.label`
  align-items: center;
  border-radius: ${RADIUS.L};
  display: flex;
  height: 100%;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  width: 125px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledInputRadio = styled.input`
  border: 0;
  clip: rect(0, 0, 0, 0);
  display: none;

  & + ${StyledSwitchItem} {
    background-color: ${COLOR.PRIMARY};
    border-radius: ${RADIUS.L};
    color: ${COLOR.WHITE};
  }

  &:checked + ${StyledSwitchItem} {
    background-color: ${COLOR.TERTIARY};
    color: ${COLOR.BLACK};
  }
`;
