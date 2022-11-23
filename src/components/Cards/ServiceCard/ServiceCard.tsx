import React from 'react';

import { StyledImgContainer, StyledParagraph, StyledServiceCard, StyledTitle } from './styled';
import { IServiceCard } from './types';

import CommonLink from '../../Links/CommonLink';

const ServiceCard: React.FC<IServiceCard> = ({ img, title, children, linkHref, isLargeCard }) => {
  const isLinkExist = !!linkHref;

  return (
    <StyledServiceCard isCentering={isLargeCard ? false : isLinkExist} isLargeCard={isLargeCard}>
      <StyledImgContainer>
        <img src={img} alt="card_img" />
      </StyledImgContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{children}</StyledParagraph>
      {isLinkExist && (
        <CommonLink href={linkHref} withArrow>
          Read more
        </CommonLink>
      )}
    </StyledServiceCard>
  );
};

export default ServiceCard;
