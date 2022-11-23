import { ReactNode } from 'react';

export interface IStyledBlogCard {
  // ** Margin left */
  ml?: number;
  // ** Margin right */
  mr?: number;
  // ** Margin top */
  mt?: number;
  // ** Margin bottom */
  mb?: number;
}

export interface IBlogCard extends IStyledBlogCard {
  img: string;
  date: string;
  title: string;
  children: ReactNode;
  linkHref: string;
}
