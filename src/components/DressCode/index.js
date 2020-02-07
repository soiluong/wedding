import React from 'react';
import styled from 'styled-components/macro';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Section from 'components/Section';
import { media } from 'styles/vars';

const SectionStyled = styled(Section)`
  border-bottom: 1px solid var(--color-border);
`;

const Card = styled.div`
  flex: 0 0 767px;
  max-width: 767px;
  margin: 10px auto;
  
  ${media.medium`
    margin: 5px auto;
  `};
`;

const Model = styled.div`
  flex: 0 0 378px;
  max-width: 378px;
  
  &:first-child {
    margin-right: 5px;
  }
  
  &:last-child {
    margin-left: 5px;
  }
  
  ${media.medium`
    flex: 1 1 calc(50% - 10px);;
    
    &&& {
      max-width: initial;
    }
    
    &:first-child {
      margin-right: 2.5px;
    }
    
    &:last-child {
      margin-left: 2.5px;
    }
  `};
  
  ${media.small`
    flex: 1 1 100%;
    margin: 5px 0;
    
    &:first-child {
      margin-right: 0;
    }
    
    &:last-child {
      margin-left: 0;
    }
  `};
`;

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px auto;
  max-width: 767px;
`;

export default function DressCode() {
  const data = useStaticQuery(graphql`
    query {
      colours: file(relativePath: { eq: "autumn-colours.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      mens: file(relativePath: { eq: "mens.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      womens: file(relativePath: { eq: "womens.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const fashion = [
    {
      image: data.colours.childImageSharp.fluid
    }
  ];

  return (
    <SectionStyled title="Dress Code" divider>
      <Content>
        <p>Colour code: Autumnal</p>
        {fashion.map(({ image }, index) => (
          <Card key={index}>
            <Img
              fluid={{
                ...data.colours.childImageSharp.fluid,
                aspectRatio: 2.4
              }}
            />
          </Card>
        ))}
        <Row>
          <Model>
            <Img
              fluid={{
                ...data.mens.childImageSharp.fluid,
                aspectRatio: 0.6
              }}
            />
          </Model>
          <Model>
            <Img
              fluid={{
                ...data.womens.childImageSharp.fluid,
                aspectRatio: 0.6
              }}
            />
          </Model>
        </Row>
      </Content>
    </SectionStyled>
  );
}
