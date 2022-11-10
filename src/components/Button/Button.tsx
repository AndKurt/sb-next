import React from 'react'
import { StyledButton } from './styled'

export interface IProps {
  label: string
}
const Button = ({ label }: IProps) => {
  return <StyledButton>{label}</StyledButton>
}

export default Button
