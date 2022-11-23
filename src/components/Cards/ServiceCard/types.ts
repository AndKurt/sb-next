import { ReactNode } from 'react';

export interface IStyledServiceCard {
  // ** Margin left */
  ml?: number;
  // ** Margin right */
  mr?: number;
  // ** Margin top */
  mt?: number;
  // ** Margin bottom */
  mb?: number;
  isCentering?: boolean;
  isLargeCard?: boolean;
}

export interface IServiceCard extends IStyledServiceCard {
  img: string;
  title: string;
  children: ReactNode;
  linkHref?: string;
  linkText?: string;
}
