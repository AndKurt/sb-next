export interface IStyledRoundButton {
  /** Top value */
  top?: number;
  /** Bottom value */
  bottom?: number;
}

export interface IRoundButton extends IStyledRoundButton {
  /** Button name */
  label: string;
  isDisbled?: boolean;
  /** Action */
  handleClick: () => void;
}
