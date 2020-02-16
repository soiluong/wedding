import React from 'react';
import styled from 'styled-components/macro';

import Section from 'components/Section';
import { TEA_CEREMONY } from 'constants/identifiers';
import { media } from 'styles/vars';

const List = styled.ol`
  font-size: 1.25rem;
  margin-bottom: 20px;
  margin-left: 15px;

  ${media.small`
    font-size: 1rem;
  `};
`;

const ListItem = styled.li`
  color: var(--color-dark-grey);
`;

const SectionStyled = styled(Section)``;

const Container = styled.div`
  margin: 0 auto;
  width: 160px;

  p {
    color: var(--color-dark-grey);
    font-size: 1.25rem;
  }

  ${media.small`
    p {
      font-size: 1rem;
    }
  `};
`;

const renderText = (text: string, index: number): React.ReactNode => (
  <ListItem key={index}>
    <p>{text}</p>
  </ListItem>
);

export default function TeaCeremony(): React.ReactNode {
  const Luong = [
    `Soi's Mum`,
    'Duc & Kim',
    'Michael & Leona',
    'Fei gor & wife',
    'Hong & Andrew'
  ];

  const Chan = [`Liv's Parents`, 'Kristina & David'];

  return (
    <SectionStyled title="Tea Ceremony" divider id={TEA_CEREMONY}>
      <Container>
        <p>
          <strong>Luong Family</strong>
        </p>
        <List>{Luong.map(renderText)}</List>
        <p>
          <strong>Chan Family</strong>
        </p>
        <List>{Chan.map(renderText)}</List>
        <p>* TBC</p>
      </Container>
    </SectionStyled>
  );
}
