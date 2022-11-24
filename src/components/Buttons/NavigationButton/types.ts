import { Direction } from '../../../interfaces';

export interface IStyledNavigationButton {
  /** Direction (Forward or Back) */
  direction: Direction;
  // ** Margin left */
  ml?: number;
  // ** Margin right */
  mr?: number;
  // ** Margin top */
  mt?: number;
  // ** Margin bottom */
  mb?: number;
  isDisabled?: boolean;
}

export interface INavigationButton extends IStyledNavigationButton {
  handleClick: () => void;
}
