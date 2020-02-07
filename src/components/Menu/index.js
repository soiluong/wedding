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
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  text-align: center;
`;

const Paragraph = styled.p`
  color: var(--color-dark-grey);
  font-size: 0.9rem;
  position: relative;
  
  ${({ underlined }) => underlined && `
    &:after {
      content: '';
      background: var(--color-border);
      height: 1px;
      width: 72px;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -35px;
    }
  `};
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
    <SectionStyled title="Menu" divider>
      <Paragraph underlined>10 Courses</Paragraph>
      <List>
        {list.map(renderText)}
      </List>
      <Paragraph>
        * All dishes will contain traces of peanut<br />
        * Please inform us of other dietary requirements
      </Paragraph>
    </SectionStyled>
  );
}
