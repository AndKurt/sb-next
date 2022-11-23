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
}
