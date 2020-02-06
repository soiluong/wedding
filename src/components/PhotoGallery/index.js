import React from 'react';
import styled from 'styled-components/macro';

import Section from 'components/Section';

const SectionStyled = styled(Section)``;

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export default function PhotoGallery() {
  return (
    <SectionStyled title="Photo Gallery">
      <Content>
        <p>Please share your photos of our big day.</p>
        <p>Put Google Drive link here</p>
      </Content>
    </SectionStyled>
  );
}
