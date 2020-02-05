import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'gatsby';

import Card, { Content as CardContent, Heading } from 'components/Card';
import Section from 'components/Section';
import { media } from 'styles/vars';
import { graphql, useStaticQuery } from 'gatsby';

const SectionStyled = styled(Section)`
  background: var(--color-white);
`;

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
  max-width: 1023px;
`;

export default function NearAttractions() {
  const data = useStaticQuery(graphql`
    query {
      emirates: file(relativePath: { eq: "emirates.jpg" }) {
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

  return (
    <SectionStyled title="Nearby Attractions">
      <Content>
        <CardStyled
          title="The O2"
          image={data.theo2.childImageSharp.fluid}
          aspectRatio={1}
        >
          <p>Arena hosting concerts, shopping and entertainment.</p>
          <address>
            <p>
              Jubilee Line:
              <br />
              North Greenwich Station
            </p>
            <p>
              <Link to="https://www.theo2.co.uk/">
                theo2.co.uk
              </Link>
            </p>
          </address>
        </CardStyled>

        <CardStyled
          title="Olympic Park"
          image={data.park.childImageSharp.fluid}
          aspectRatio={1}
        >
          <p>Sporting Complex with West Ham United Stadium.</p>
          <address>
            <p>
              Jubilee Line/Central Line:
              <br />
              Stratford Station
            </p>
            <p>
              <Link to="https://www.queenelizabetholympicpark.co.uk/">
                queenelizabetholympicpark.co.uk
              </Link>
            </p>
          </address>
        </CardStyled>

        <CardStyled
          title="Canary Wharf"
          image={data.wharf.childImageSharp.fluid}
          aspectRatio={1}
        >
          <p>Business district with shopping and restaurants.</p>
          <address>
            <p>
              Jubilee Line:
              <br />
              Canary Wharf
            </p>
            <p>
              <Link to="https://canarywharf.com/">
                canarywharf.com
              </Link>
            </p>
          </address>
        </CardStyled>

        <CardStyled
          title="Emirates Airline Cable Cars"
          image={data.emirates.childImageSharp.fluid}
          aspectRatio={1}
        >
          <p>London's cable car across the River Thames.</p>
          <address>
            <p>
              DLR station:
              <br />
              Royal Victoria
            </p>
            <p>
              <Link to="https://www.emiratesairline.co.uk/">
                emiratesairline.co.uk
              </Link>
            </p>
          </address>
        </CardStyled>

        <CardStyled
          title="Westfield Stratford City"
          image={data.westfield.childImageSharp.fluid}
          aspectRatio={1}
        >
          <p>Europe's largest shopping mall, which opened in 2011.</p>
          <address>
            <p>
              Jubilee Line/Central Line:
              <br />
              Stratford Station
            </p>
            <p>
              <Link to="https://uk.westfield.com/stratfordcity">
                uk.westfield.com/stratfordcity
              </Link>
            </p>
          </address>
        </CardStyled>
      </Content>
    </SectionStyled>
  );
}
