import React from 'react';
import styled from 'styled-components/macro';

import { media } from 'styles/vars';
import dividerImg from '../../../static/divider-straight.png';

const SectionContainer = styled.section`
  margin: 10px auto;
  padding: 70px 0;
  width: 100%;

  ${media.small`
    padding: 30px 0;
  `};
`;

const Title = styled.h2`
  text-align: center;
  
  ${({ divider }) => !divider && `
    margin-bottom: 20px;
  `};
`;

const DividerContainer = styled.div`
  text-align: center;
`;

const Divider = styled.img`
  margin-bottom: 20px;
  width: 200px;
`;

export default function Section({ children, className, divider, id, title }) {
  return (
    <SectionContainer className={className} id={id}>
      <Title divider={divider}>{title}</Title>
      {divider ? (
        <DividerContainer>
          <Divider src={dividerImg} alt="" />
        </DividerContainer>
      ) : null}
      {children}
    </SectionContainer>
  );
}
