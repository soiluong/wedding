import React from 'react';
import styled from 'styled-components/macro';

import Section from 'components/Section';
import { media } from 'styles/vars';

const List = styled.ul`
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  color: var(--color-dark-grey);

  p {
    font-size: 1.25rem;
  }

  ${media.medium`
    p {
      font-size: 1rem;
    }
  `};
`;

const SectionStyled = styled(Section)`
  background: var(--color-white);
  text-align: center;
`;

const Disclaimer = styled.p`
  color: var(--color-dark-grey);
  font-size: 0.9rem;
`;

const renderText = (text, index) => (
  <ListItem key={index}>
    <p>{text}</p>
  </ListItem>
);

export default function Menu() {
  const list = [
    'Roasted suckling pig',
    'Braised dried scallop with whole garlic',
    'Deep fried stuffed crab claws',
    'Special seafood soup',
    'Lobster "Kam Sa" style',
    'Braised whole abalone',
    'Supreme roasted chicken',
    'Streamed fresh turbot',
    'Special glutinous rice',
    'Braised "yee mein" noodles with fresh crab meat',
    'Desserts'
  ];

  return (
    <SectionStyled title="Menu">
      <List>
        {list.map(renderText)}
      </List>
      <Disclaimer>
        * All dishes will have traces of peanut.<br />
        * For other dietary arrangement please let us know.<br />
        * Chinese banquets traditionally overrun. The desserts could arrive just after 9:30pm.
      </Disclaimer>
    </SectionStyled>
  );
}
