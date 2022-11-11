export type Social = 'behance' | 'dribbble' | 'facebook' | 'linkedin' | 'twitter' | 'youtube';

export interface IStyledSocialButton {
  /** Margin left */
  ml?: number;
  /** Margin right */
  mr?: number;
  /** Margin top */
  mt?: number;
  /** Margin bottom */
  mb?: number;
}

export interface ISocialButton extends IStyledSocialButton {
  /** Social name */
  socialName: Social;
}
