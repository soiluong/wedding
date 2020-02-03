import React from 'react';
import styled from 'styled-components/macro';
import { graphql, useStaticQuery } from 'gatsby';

import Card from 'components/Card';
import { media } from 'styles/vars';

const Section = styled.section`
  margin: 10px auto;
  max-width: 1023px;
  width: 100%;
`;

const Title = styled.h2`
  margin-top: 70px;
  text-align: center;
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

export default () => {
  const data = useStaticQuery(graphql`
    query {     
      councilRoom: file(relativePath: { eq: "council-room.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 284) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      },
      photo: file(relativePath: { eq: "photography.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 284) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      },
      tea: file(relativePath: { eq: "chinese-tea-ceremony.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 284) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      },
      cake: file(relativePath: { eq: "cake.jpg" }) {
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
    <Section>
      <Title>Itinerary</Title>
      <Row>
        <CardStyled
          title="Reception"
          time="12:15 p.m. - 1:00 p.m."
          image={data.councilRoom.childImageSharp.fluid}
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
          image={data.cake.childImageSharp.fluid}
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
    </Section>
  );
};
