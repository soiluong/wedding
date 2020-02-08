import React from 'react';
import Helmet from 'react-helmet';

import { GlobalStyle } from 'styles/global';

import Header from 'components/Header';
import Preamble from 'components/Preamble';
import Events from 'components/Events';
import Menu from 'components/Menu';
import TeaCeremony from 'components/TeaCeremony';
import NearbyAttractions from 'components/NearbyAttractions';
import GettingThere from 'components/GettingThere';
import NearbyHotels from 'components/NearbyHotels';
import DressCode from 'components/DressCode';
import PhotoGallery from 'components/PhotoGallery';
import Navigation from '../components/Navigation';

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
      <Navigation />
      <Header></Header>
      <Preamble />
      <Events />
      <Menu />
      <TeaCeremony />
      <NearbyAttractions />
      <GettingThere />
      <NearbyHotels />
      <DressCode />
      <PhotoGallery />
    </main>
  </>
);

export default IndexPage;
