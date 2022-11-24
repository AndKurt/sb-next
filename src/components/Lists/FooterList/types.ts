export interface IStyledFooterList {
  // ** Margin left */
  ml?: number;
  // ** Margin right */
  mr?: number;
  // ** Margin top */
  mt?: number;
  // ** Margin bottom */
  mb?: number;
}

export interface IFooterList extends IStyledFooterList {
  title: string;
  items: string[];
}
