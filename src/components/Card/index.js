import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components/macro';
import { media } from "styles/vars"

const CardContainer = styled.div`
  position: relative;
  z-index: 0;
`;

export const Content = styled.div`
  background: var(--color-true-white);
  margin-top: -30px;
  margin-left: 30px;
  min-height: 250px;
  padding: 30px;
  
  ${media.medium`
    margin: 0;
    min-height: initial;
  `};
`;

export const Heading = styled.h3`
  color: var(--color-title);
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Time = styled.p`
  color: var(--color-dark-grey);
  font-size: 16px;
  
  &:after {
    background: var(--color-gray);
    content: '';
    display: block;
    height: 1px;
    margin: 15px 0 10px;
    width: 50px;
  }
`;

export default ({ children, className, image, title, time, aspectRatio }) => {
  const img = {
    ...image,
    aspectRatio
  };

  return (
    <CardContainer className={className}>
      <Img fluid={img} style={{ zIndex: -1 }} />

      <Content>
        <Heading>{title}</Heading>
        <Time>{time}</Time>
        {children}
      </Content>
    </CardContainer>
  );
};
