import styled from 'styled-components/macro';

import { media, spacer } from 'styles/vars';

export const CardContainer = styled.div`
  position: relative;
  z-index: 0;
`;

export const Content = styled.div`
  background: var(--color-true-white);
  margin-top: ${spacer(-6)};
  margin-left: ${spacer(6)};
  min-height: 250px;
  padding: ${spacer(6)};

  ${media.medium`
    margin: 0;
    min-height: initial;
  `};
`;

export const Heading = styled.h3`
  color: var(--color-title);
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${spacer(2)};
  text-transform: uppercase;
`;

export const Time = styled.p`
  color: var(--color-dark-grey);
  font-size: var(--font-medium);

  &:after {
    background: var(--color-gray);
    content: '';
    display: block;
    height: 1px;
    margin: 15px 0 10px;
    width: 50px;
  }
`;
