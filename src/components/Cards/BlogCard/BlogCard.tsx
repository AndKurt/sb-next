import React from 'react';

import { StyledBlogCard, StyledDate, StyledImg, StyledInfoContainer, StyledParagraph, StyledTitle } from './styled';
import { IBlogCard } from './types';

import CommonLink from '../../Links/CommonLink';

const BlogCard: React.FC<IBlogCard> = ({ date, img, title, linkHref, children }) => (
  <StyledBlogCard>
    <StyledImg src={img} alt="blog_img" />
    <StyledInfoContainer>
      <StyledDate>{date}</StyledDate>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{children}</StyledParagraph>
      <CommonLink href={linkHref} withArrow>
        Read more
      </CommonLink>
    </StyledInfoContainer>
  </StyledBlogCard>
);

export default BlogCard;
