import React from 'react';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components/macro';

import { GlobalStyle } from 'styles/global';

import Header from 'components/Header';
import Preamble from 'components/Preamble';
import Events from 'components/Events';
import Menu from "../components/Menu"
import TeaCeremony from "../components/TeaCeremony"
import NearbyAttractions from "../components/NearbyAttractions"

const Content = styled.div`
  background: var(--color-white);
  margin: 10px 10px 0;
`;

const alternateSectionStyle = css`
  background: var(--color-white);
  border-top: 1px solid var(--color-brown);
  margin: 20px;
  padding: 20px;
  text-align: center;

  h2 {
    color: var(--color-black);
    font-size: 45px;
    text-shadow: var(--color-blue) -3px 2px;
  }
`;

const Section = styled.section`
  display: flex;
`;

const PhotoGallery = styled.section`
  ${alternateSectionStyle};
  margin-bottom: 0;
`;

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Lobster&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <main>
      <Header />
      <Preamble />
      <Events />
      <Menu />
      <TeaCeremony />
      <NearbyAttractions />

      <Content>

        <Section>
          <h2>Getting There</h2>
          <p>Driving instructions, nearest DLR station</p>
        </Section>

        <Section>
          <h2>Nearby Hotels</h2>
          <ul>
            <li>List hotels outside yiban here</li>
          </ul>
        </Section>

        <Section>
          <h2>Dress Code</h2>
          <p>Dress smartly</p>
        </Section>

        <PhotoGallery>
          <h2>Photo Gallery</h2>
          <p>Please share your photos of our big day.</p>
          <p>Put Google Drive link here</p>
        </PhotoGallery>
      </Content>
    </main>
  </>
);

export default IndexPage;
