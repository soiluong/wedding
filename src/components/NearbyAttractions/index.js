import React from 'react';
import styled from 'styled-components/macro';
import { graphql, useStaticQuery } from 'gatsby';

import Card, { Content as CardContent, Heading } from 'components/Card';
import Section from 'components/Section';
import { NEARBY_ATTRACTIONS } from 'constants/identifiers';
import { media } from 'styles/vars';

const SectionStyled = styled(Section)`
  background: var(--color-white);
`;

const CardStyled = styled(Card)`
  flex: 0 0 300px;
  max-width: 300px;
  margin: 5px;

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
  max-width: 1023px;
`;

export default function NearAttractions() {
  const data = useStaticQuery(graphql`
    query {
      emirates: file(relativePath: { eq: "emirates-air-line.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      theo2: file(relativePath: { eq: "the-o2.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      westfield: file(relativePath: { eq: "westfield.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      park: file(relativePath: { eq: "olympic-park.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      wharf: file(relativePath: { eq: "canary-wharf.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const attractions = [
    {
      title: 'The O2',
      image: data.theo2.childImageSharp.fluid,
      aspectRatio: 1,
      content: (
        <>
          <p>Arena hosting concerts, shopping and entertainment.</p>
          <address>
            <p>
              Jubilee Line:
              <br />
              North Greenwich Station
            </p>
            <p>
              <a href="https://www.theo2.co.uk/">theo2.co.uk</a>
            </p>
          </address>
        </>
      )
    },
    {
      title: 'Olympic Park',
      image: data.park.childImageSharp.fluid,
      aspectRatio: 1,
      content: (
        <>
          <p>Sporting Complex with West Ham United Stadium.</p>
          <address>
            <p>
              Jubilee Line/Central Line:
              <br />
              Stratford Station
            </p>
            <p>
              <a href="https://www.queenelizabetholympicpark.co.uk/">
                queenelizabetholympicpark.co.uk
              </a>
            </p>
          </address>
        </>
      )
    },
    {
      title: 'Canary Wharf',
      image: data.wharf.childImageSharp.fluid,
      aspectRatio: 1,
      content: (
        <>
          <p>Business district with shops and restaurants.</p>
          <address>
            <p>
              Jubilee Line:
              <br />
              Canary Wharf
            </p>
            <p>
              <a href="https://canarywharf.com/">canarywharf.com</a>
            </p>
          </address>
        </>
      )
    },
    {
      title: 'Emirates Air Line',
      image: data.emirates.childImageSharp.fluid,
      aspectRatio: 1,
      content: (
        <>
          <p>London's cable car across the River Thames.</p>
          <address>
            <p>
              DLR station:
              <br />
              Royal Victoria
            </p>
            <p>
              <a href="https://www.emiratesairline.co.uk/">
                emiratesairline.co.uk
              </a>
            </p>
          </address>
        </>
      )
    },
    {
      title: 'Westfield',
      image: data.westfield.childImageSharp.fluid,
      aspectRatio: 1,
      content: (
        <>
          <p>Europe's largest shopping mall, which opened in 2011.</p>
          <address>
            <p>
              Jubilee Line/Central Line:
              <br />
              Stratford Station
            </p>
            <p>
              <a href="https://uk.westfield.com/stratfordcity">
                uk.westfield.com/stratfordcity
              </a>
            </p>
          </address>
        </>
      )
    }
  ];

  return (
    <SectionStyled title="Nearby Attractions" id={NEARBY_ATTRACTIONS}>
      <Content>
        {attractions.map(({ title, image, aspectRatio, content }, index) => (
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
