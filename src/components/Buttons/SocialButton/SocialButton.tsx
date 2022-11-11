import React from 'react';

import { StyledSocialButton } from './styled';
import { ISocialButton } from './types';
import { setSocialData } from './utils';

const SocialButton = ({ ml, mr, mt, mb, socialName }: ISocialButton) => {
  const { link, logo } = setSocialData(socialName);

  return (
    <StyledSocialButton ml={ml} mr={mr} mt={mt} mb={mb} href={link} target="_blank" rel="noreferrer">
      <img src={logo} alt={socialName} />
    </StyledSocialButton>
  );
};
export default SocialButton;
