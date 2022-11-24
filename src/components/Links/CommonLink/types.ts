import { ReactNode } from 'react';

import { TitleSize } from '../../../interfaces';

export interface IStyledCommonLink {
  // ** Margin left */
  ml?: number;
  // ** Margin right */
  mr?: number;
  // ** Margin top */
  mt?: number;
  // ** Margin bottom */
  mb?: number;
  // ** Text size */
  textSize?: TitleSize;
}

export interface ICommonLink extends IStyledCommonLink {
  to: string;
  children: ReactNode;
  withArrow?: boolean;
  // ** Internal or external link */
  isInternalPath: boolean;
}
