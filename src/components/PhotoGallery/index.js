import React from 'react';
import styled from 'styled-components/macro';

import Section from 'components/Section';
import { PHOTO_GALLERY } from 'constants/identifiers';

const SectionStyled = styled(Section)``;

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export default function PhotoGallery() {
  return (
    <SectionStyled title="Photo Gallery" divider id={PHOTO_GALLERY}>
      <Content>
        <p>Please share your photos of our big day.</p>
        <p>
          <a href="https://photos.app.goo.gl/JCC5XrCVhF7k17pZ6">
            Google Photos
          </a>
        </p>
      </Content>
    </SectionStyled>
  );
}
