import React, { memo } from 'react';

import {
  StyledAvatar,
  StyledInfoContainer,
  StyledName,
  StyledParagraph,
  StyledPosition,
  StyledReviewCard,
} from './styled';
import { IReviewCard } from './types';

const ReviewCard: React.FC<IReviewCard> = ({ img, name, position, children }) => (
  <StyledReviewCard>
    <StyledInfoContainer>
      <StyledAvatar src={img} alt={name} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <StyledName>{name}</StyledName>
        <StyledPosition>{position}</StyledPosition>
      </div>
    </StyledInfoContainer>
    <StyledParagraph>{children}</StyledParagraph>
  </StyledReviewCard>
);

export default memo(ReviewCard);
