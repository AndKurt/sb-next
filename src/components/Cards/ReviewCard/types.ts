import { ReactNode } from 'react';

export interface IStyledReviewCard {
  // ** Margin left */
  ml?: number;
  // ** Margin right */
  mr?: number;
  // ** Margin top */
  mt?: number;
  // ** Margin bottom */
  mb?: number;
}

export interface IReviewCard extends IStyledReviewCard {
  img: string;
  name: string;
  position: string;
  children: ReactNode;
}
