export type Colors = 'PRIMARY' | 'WHITE';
export type Period = 'Mo' | 'Yr';

export interface IBtnColors {
  bgColor: Colors;
  textColor: Colors;
}
export interface IStyledPriceCard {
  // ** Margin left */
  ml?: number;
  // ** Margin right */
  mr?: number;
  // ** Margin top */
  mt?: number;
  // ** Margin bottom */
  mb?: number;
}

export interface IPriceCard extends IStyledPriceCard {
  title: string;
  price: number | string;
  optionList: string[];
  handleChosePlan: <T, P>(plan: T, period: P) => { plan: T; period: P };
}
