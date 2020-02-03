import React from 'react';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components/macro';

import { GlobalStyle } from 'styles/global';

import Header from 'components/Header';
import Preamble from 'components/Preamble';
import Events from 'components/Events';

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

const TheBigDay = styled.section`
  ${alternateSectionStyle};
  border-top: none;
`;

const Section = styled.section`
  display: flex;
`;

const Menu = styled.section`
  ${alternateSectionStyle};
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

      <Content>

        <Menu>
          <h2>Menu</h2>
          <ul>
            <li>
              <p>Roasted suckling pig</p>
            </li>
            <li>
              <p>Braised dried scallop with whole garlic</p>
            </li>
            <li>
              <p>Deep fried stuffed crab claws</p>
            </li>
            <li>
              <p>Special seafood soup</p>
            </li>
            <li>
              <p>Lobster "Kam Sa" style</p>
            </li>
            <li>
              <p>Braised whole abalone</p>
            </li>
            <li>
              <p>Supreme roasted chicken</p>
            </li>
            <li>
              <p>Streamed fresh turbot</p>
            </li>
            <li>
              <p>Special glutinous rice</p>
            </li>
            <li>
              <p>Braised "yee mein" noodles with fresh crab meat</p>
            </li>
            <li>
              <p>Desserts</p>
            </li>
          </ul>
          <p>
            * All dishes will have traces of peanut.
            <br />* For other dietary arrangement please let us know.
          </p>
        </Menu>

        <Section>
          <h2>Nearby Attractions</h2>
          <p>
            The O2, Emirates Airline cable cars, stratford city westfield,
            Olympic Park, Canary Wharf
          </p>
        </Section>

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
