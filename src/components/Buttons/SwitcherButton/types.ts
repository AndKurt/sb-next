export type Social = 'behance' | 'dribbble' | 'facebook' | 'linkedin' | 'twitter' | 'youtube';

export interface IStyledSwitcherContainer {
  /// ** Margin left */
  // ml?: number;
  /// ** Margin right */
  // mr?: number;
  /// ** Margin top */
  // mt?: number;
  /// ** Margin bottom */
  // mb?: number;
}
export interface IStyledSwitcherButton {
  activeOption: boolean;
}

export interface ISwitcherButton extends IStyledSwitcherContainer {
  /** Social name */
  // socialName: Social;
  option1: string;
  option2: string;
}

export enum SelectedOption {
  option1 = 'monthly',
  option2 = 'year',
}

export interface ISwitchItem {
  value: string;
  onChange: () => void;
  isActive: boolean;
}
