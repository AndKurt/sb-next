import { BackgroundColor, ButtonWidth, ButtonHeight, Radius, TitleSize, TextColor } from '../../../interfaces';

export interface IStyledCommonButton {
  /** Background color for button */
  bgColor?: BackgroundColor;
  textColor?: TextColor;
  radius?: Radius;
  width?: ButtonWidth;
  height?: ButtonHeight;
  textSize?: TitleSize;
  padding?: number;
  /** Margin top */
  mt?: number;
  /** Margin bottom */
  mb?: number;
  isBorder?: boolean;
  isDisabled?: boolean;
  isShadow?: boolean;
}

export interface ICommonButton extends IStyledCommonButton {
  /** Button name */
  label?: string;
  /** Button name */
  mediaIcon?: 'play' | 'pause';
  /** Action */
  handleClick: () => void;
}
