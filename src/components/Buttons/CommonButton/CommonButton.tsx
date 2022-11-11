import React from 'react';

import { StyledCommonButton } from './styled';
import { ICommonButton } from './types';

const CommonButton = ({
  label,
  icon,
  bgColor,
  isBorder,
  isDisabled,
  isShadow,
  handleClick,
  height,
  mt,
  mb,
  radius,
  width,
  padding,
  textSize,
  textColor,
}: ICommonButton) => (
  <StyledCommonButton
    bgColor={bgColor}
    height={height}
    isBorder={isBorder}
    disabled={isDisabled}
    isShadow={isShadow}
    mt={mt}
    mb={mb}
    radius={radius}
    width={width}
    textSize={textSize}
    textColor={textColor}
    padding={padding}
    onClick={handleClick}
  >
    {icon && <img src={icon} alt="media-button" />}
    {label}
  </StyledCommonButton>
);

export default CommonButton;
