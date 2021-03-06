import React from 'react';
import styled from 'styled-components/macro';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import { media } from 'styles/vars';

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
  z-index: 0;

  p {
    color: var(--color-white);
  }

  ${media.medium`
    margin-bottom: 5px;
  `};

  ${media.small`
    height: 60vh;
  `};
`;

const Title = styled.span`
  color: var(--color-white);
  font-size: 22px;
  margin-bottom: 30px;
  text-shadow: 0 6px 10px rgba(0, 0, 0, 0.38);
  text-transform: uppercase;

  ${media.small`
    font-size: 16px;
  `};
`;

const HeaderImg = styled.div`
  ${({ fluid }) => fluid.src && `background: url(${fluid.src});`};
  background-size: cover;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-attachment: scroll;
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: -1;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.3;
  }

  ${media.medium`
    background-position: 25% 0;
  `};

  ${media.small`
    background-position: 20% 0;
    height: 60vh;
  `};
`;

const Date = styled.p`
  align-items: center;
  display: flex;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 6px 10px rgba(0, 0, 0, 0.38);

  svg {
    path {
      fill: var(--color-white);
    }

    width: 50px;
    height: 50px;
  }

  ${media.small`
    font-size: 18px;
  `};
`;

export const Heading = styled.h1`
  ${media.small`
    font-size: 72px;
  `};
`;

const Header = ({ children }) => {
  const { site, landingBg } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        landingBg: file(relativePath: { eq: "landingBg.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <HeaderContainer>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={site.siteMetadata.title}
        meta={[
          {
            name: `description`,
            content: site.siteMetadata.description
          }
        ]}
      />
      <HeaderImg fluid={landingBg.childImageSharp.fluid} />
      <Title>Save the date</Title>
      <Heading>
        Liv <span>{`&`}</span> Soi
      </Heading>
      <Date>10.10.2020 - London, United Kingdom</Date>
      {children}
    </HeaderContainer>
  );
};

export default Header;
