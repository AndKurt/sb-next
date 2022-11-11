import React from 'react';

import { StyledCommonButton } from './styled';
import { ICommonButton } from './types';

import pauseIcon from '../../../assets/svg/buttons/icon_pause_circle.svg';
import playIcon from '../../../assets/svg/buttons/icon_play_circle.svg';

const CommonButton = ({
  label,
  mediaIcon,
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
    {mediaIcon && <img src={mediaIcon === 'pause' ? pauseIcon : playIcon} alt={mediaIcon} />}
    {label}
  </StyledCommonButton>
);

export default CommonButton;
