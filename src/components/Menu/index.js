import React from 'react';
import styled from 'styled-components/macro';

import Section from 'components/Section';

const List = styled.ul``;

const ListItem = styled.li`
  color: var(--color-dark-grey);
  font-size: 1rem;
`;

const SectionStyled = styled(Section)`
  background: var(--color-white);
  text-align: center;
`;

const Disclaimer = styled.p`
  color: var(--color-dark-grey);
  font-size: 0.9rem;
`;

export default function Menu() {
  return (
    <SectionStyled title="Menu">
      <List>
        <ListItem>
          Roasted suckling pig
        </ListItem>
        <ListItem>
          Braised dried scallop with whole garlic
        </ListItem>
        <ListItem>
          Deep fried stuffed crab claws
        </ListItem>
        <ListItem>
          Special seafood soup
        </ListItem>
        <ListItem>
          Lobster "Kam Sa" style
        </ListItem>
        <ListItem>
          Braised whole abalone
        </ListItem>
        <ListItem>
          Supreme roasted chicken
        </ListItem>
        <ListItem>
          Streamed fresh turbot
        </ListItem>
        <ListItem>
          Special glutinous rice
        </ListItem>
        <ListItem>
          Braised "yee mein" noodles with fresh crab meat
        </ListItem>
        <ListItem>
          Desserts
        </ListItem>
      </List>
      <Disclaimer>
        * All dishes will have traces of peanut.
        <br />* For other dietary arrangement please let us know.
      </Disclaimer>
    </SectionStyled>
  );
}
