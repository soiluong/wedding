import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components/macro';
import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { media } from 'styles/vars';
import venueBg from '../../../static/preamble-venue.jpg';

const smallTitleStyle = css`
  color: var(--color-gray);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const smallBodyStyle = css`
  color: #333333;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;

  ${media.small`
    font-size: 18px;
    margin-bottom: 0;
  `};
`;

const Section = styled.section`
  display: flex;

  ${media.medium`
    flex-wrap: wrap;
  `};
`;

const BigBox = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  ${({ orangeBg }) =>
    orangeBg &&
    `
    background: var(--color-coral);
  `};

  ${({ marginBottom }) =>
    marginBottom &&
    `
    margin-bottom: 10px;
  `};

  ${({ marginTop }) =>
    marginTop &&
    `
    margin-top: 10px;
  `};

  ${media.medium`
    margin: 0 0 10px;
    
    &:after {
      padding-bottom: 50%;
    }
  `};
`;

const BigBoxImage = styled.div`
  background: url(${venueBg});
  background-size: cover;
  background-position: 50% 0;
  background-repeat: no-repeat;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;

  ${media.medium`
    right: 0;
    width: 50%;
  `};
`;

const Title = styled.p`
  color: var(--color-white);
  display: block;
  font-size: 24px;
  margin-bottom: 0;

  ${({ theme: { inverted } }) => inverted && smallTitleStyle};

  ${media.small`
    font-size: 14px;
  `};
`;

const Date = styled.p`
  color: var(--color-white);
  display: block;
  font-family: 'Lobster', cursive;
  font-size: 68px;
  margin: 20px 0;

  ${({ theme: { inverted } }) => inverted && smallTitleStyle};

  ${media.medium`
    font-size: 48px;
    margin: 10px 0;
  `};

  ${media.small`
    font-size: 32px;
  `};
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 40px;
  position: absolute;
  text-align: center;
  width: 100%;

  ${media.medium`
    padding: 20px;
  `};
`;

const SmallContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const LeftContent = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  ${media.small`
    padding: 15px;
  `};
`;

const SmallContentTitle = styled.span`
  ${smallTitleStyle};
`;

const SmallContentBody = styled.p`
  ${smallBodyStyle};
`;

const RightImage = styled.div`
  flex: 1 1 50%;
  width: 100%;
`;

const Paragraph = styled.p`
  color: var(--color-white);
  font-size: 16px;
  margin-bottom: 0;

  ${({ theme: { inverted } }) => inverted && smallBodyStyle};
`;

const SmallBox = styled.div`
  background: var(--color-white);
  position: relative;
  width: 100%;

  &:after {
    content: '';
    display: block;
    padding-bottom: 50%;
  }
`;

const BigBoxImgContent = styled.div`
  align-items: center;
  background: var(--color-white);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  height: 50%;
  padding: 20px;
  position: absolute;
  text-align: center;
  width: 50%;

  ${media.medium`
    height: 100%;
    width: 50%;
  `};
`;

const Column = styled.div`
  flex: 1 1 50%;

  ${({ left }) =>
    left &&
    `
    margin-right: 5px;
  `};

  ${({ right }) =>
    right &&
    `
    margin-left: 5px;
  `};

  ${media.medium`
    flex: 1 1 100%;
    margin: 0;
    padding: 5px 10px;
    
    ${({ right }) =>
      right &&
      `      
      > div:nth-child(2) {
        margin-top: 10px;
      }
      
      > div:nth-child(2) {
        margin-bottom: 0;
      }
    `};
  `};
`;

const LinkStyled = styled(Link)`
  ${media.small`
    margin-top: 20px;
  `};
`;

const Preamble = () => {
  const data = useStaticQuery(graphql`
    query {
      engagement: file(relativePath: { eq: "engagement.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      newhamTownhall: file(relativePath: { eq: "townhall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Section>
      <Column left>
        <BigBox marginBottom orangeBg>
          <Content>
            <Title>We would love for you to join us on our special day.</Title>
            <Date>10 October 2020</Date>
            <Paragraph>
              Please let us know if you will be attending our wedding.
            </Paragraph>
          </Content>
        </BigBox>

        <SmallBox>
          <Content>
            <SmallContent>
              <LeftContent>
                <SmallContentTitle>The night of the proposal</SmallContentTitle>
                <SmallContentBody>
                  Taken just before we got engaged
                </SmallContentBody>
              </LeftContent>
              <RightImage>
                <Img fluid={data.engagement.childImageSharp.fluid} />
              </RightImage>
            </SmallContent>
          </Content>
        </SmallBox>
      </Column>
      <Column right>
        <SmallBox>
          <Content>
            <SmallContent>
              <LeftContent>
                <SmallContentTitle>Newham Town Hall</SmallContentTitle>
                <SmallContentBody>Our Reception</SmallContentBody>
                <LinkStyled>Further details</LinkStyled>
              </LeftContent>
              <RightImage>
                <Img fluid={data.newhamTownhall.childImageSharp.fluid} />
              </RightImage>
            </SmallContent>
          </Content>
        </SmallBox>

        <BigBox marginTop>
          <BigBoxImage />
          <ThemeProvider theme={{ inverted: true }}>
            <BigBoxImgContent>
              <Title>The Big Feast</Title>
              <Paragraph>Our Wedding Banquet</Paragraph>
              <LinkStyled>Further details</LinkStyled>
            </BigBoxImgContent>
          </ThemeProvider>
        </BigBox>
      </Column>
    </Section>
  );
};

export default Preamble;
