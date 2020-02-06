import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'gatsby';

import Card, { Content as CardContent, Heading } from 'components/Card';
import Section from 'components/Section';
import { media } from 'styles/vars';
import { graphql, useStaticQuery } from 'gatsby';

const SectionStyled = styled(Section)``;

const CardStyled = styled(Card)`
  flex: 0 0 300px;
  max-width: 300px;
  margin: 10px;

  ${media.medium`
    flex: 1 1 100%;
    
    &&& {
      margin: 0 0 10px;
    }
  `};

  ${CardContent} {
    padding: 15px;
  }

  ${Heading} {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  a {
    font-size: 0.7rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export default function DressCode() {
  const data = useStaticQuery(graphql`
    query {
      hampton: file(relativePath: { eq: "hampton.webp" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const hotels = [
    {
      title: 'Hampton by Hilton',
      image: data.hampton.childImageSharp.fluid,
      aspectRatio: 1,
      content: (
        <>
          <address>Dockside Rd, Royal Docks, London E16 2FQ</address>
          <Link to="https://www.hilton.com/en/hotels/londlhx-hampton-london-docklands/">
            hilton.com
          </Link>
        </>
      )
    }
  ];

  return (
    <SectionStyled title="Dress Code">
      <Content>
        {hotels.map(({ title, image, aspectRatio, content }, index) => (
          <CardStyled
            title={title}
            image={image}
            aspectRatio={aspectRatio}
            key={index}
          >
            {content}
          </CardStyled>
        ))}
      </Content>
    </SectionStyled>
  );
}
