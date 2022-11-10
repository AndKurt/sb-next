import React from 'react';
import { StyledButton } from './styled';

export interface IProps {
  label: string;
  color: 'secondary' | 'main';
}
function Button({ label, color }: IProps) {
  return <StyledButton color={color}>{label}</StyledButton>;
}

export default Button;
