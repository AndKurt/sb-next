import React from 'react';

import { StyledImgContainer, StyledParagraph, StyledServiceCard, StyledTitle } from './styled';
import { IServiceCard } from './types';

import CommonLink from '../../Links/CommonLink';

const ServiceCard: React.FC<IServiceCard> = ({ img, title, children, linkHref, linkText, isLargeCard }) => {
  const isLinkExist = !!(linkHref && linkText);

  return (
    <StyledServiceCard isCentering={isLargeCard ? false : isLinkExist} isLargeCard={isLargeCard}>
      <StyledImgContainer>
        <img src={img} alt="card_img" />
      </StyledImgContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{children}</StyledParagraph>
      {isLinkExist && (
        <CommonLink href={linkHref} withArrow>
          {linkText}
        </CommonLink>
      )}
    </StyledServiceCard>
  );
};

export default ServiceCard;
