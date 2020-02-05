import React from 'react';
import styled from 'styled-components/macro';
import { graphql, useStaticQuery } from 'gatsby';

import Card from 'components/Card';
import Section from 'components/Section';
import { media } from 'styles/vars';

const SectionStyled = styled(Section)`
  max-width: 1023px;
`;

const CardStyled = styled(Card)`
  flex: 1 1 calc(50% - 5px);

  &:nth-child(1) {
    margin-right: 5px;
  }

  &:nth-child(2) {
    margin-left: 5px;
  }

  ${media.medium`
    flex: 1 1 100%;
    &&& {
      margin: 0 0 10px;
    }
  `};
`;

const Address = styled.address`
  color: var(--color-dark-grey);
  font-size: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export default function Events() {
  const data = useStaticQuery(graphql`
    query {
      councilRoom: file(relativePath: { eq: "council-room.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 284) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo: file(relativePath: { eq: "photography.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 284) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      tea: file(relativePath: { eq: "chinese-tea-ceremony.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 284) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
      yiban: file(relativePath: { eq: "yi-ban.png" }) {
        childImageSharp {
          fluid(maxHeight: 284) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <SectionStyled title="Itinerary">
      <Row>
        <CardStyled
          title="Registry"
          time="12:15 p.m. - 1:00 p.m."
          image={data.councilRoom.childImageSharp.fluid}
          aspectRatio={1.77}
        >
          <Address>
            Newham Town Hall
            <br />
            328 Barking Road
            <br />
            London, E6 2RT
          </Address>
        </CardStyled>

        <CardStyled
          title="Photos"
          time="1:00 p.m. - 2:00 p.m."
          image={data.photo.childImageSharp.fluid}
          aspectRatio={1.77}
        >
          <Address>
            Newham Town Hall
            <br />
            328 Barking Road
            <br />
            London, E6 2RT
          </Address>
        </CardStyled>
      </Row>
      <Row>
        <CardStyled
          title="Tea Ceremony"
          time="4:00 p.m. - 17:00 p.m."
          image={data.tea.childImageSharp.fluid}
          aspectRatio={1.77}
        >
          <Address>
            Yi-Ban Chinese Restaurant
            <br />
            1010 Dockside Road
            <br />
            London, E16 2QT
          </Address>
        </CardStyled>

        <CardStyled
          title="Banquet"
          time="17:30 p.m. - 10:00 p.m."
          image={data.yiban.childImageSharp.fluid}
          aspectRatio={1.77}
        >
          <Address>
            Yi-Ban Chinese Restaurant
            <br />
            1010 Dockside Road
            <br />
            London, E16 2QT
          </Address>
        </CardStyled>
      </Row>
    </SectionStyled>
  );
};
