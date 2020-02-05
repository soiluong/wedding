import React from 'react';
import styled from 'styled-components/macro';

const SectionContainer = styled.section`
  margin: 10px auto;
  padding: 70px 0;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export default function Section({ children, className, title }) {
  return (
    <SectionContainer className={className}>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  )
}