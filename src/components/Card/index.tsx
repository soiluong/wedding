import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { CardContainer, Content, Heading, Time } from './styled';

interface Props {
  children: React.ReactNode;
  className?: string;
  id: string;
  image: FluidObject;
  title: string;
  time: string;
  aspectRatio: number;
}

export default function Card({
  children,
  className,
  id,
  image,
  title,
  time,
  aspectRatio
}: Props): React.ReactNode {
  const img = {
    ...image,
    aspectRatio
  };

  return (
    <CardContainer className={className} id={id}>
      <Img fluid={img} style={{ zIndex: -1 }} />

      <Content>
        <Heading>{title}</Heading>
        <Time>{time}</Time>
        {children}
      </Content>
    </CardContainer>
  );
}

export { Content, Heading };
