import React from 'react';
import styled from 'styled-components/macro';

import Section from 'components/Section';
import { GETTING_THERE } from 'constants/identifiers';

const SectionStyled = styled(Section)`
  max-width: 1023px;
  text-align: center;
`;

export default function GettingThere() {
  return (
    <SectionStyled title="Getting There" id={GETTING_THERE}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9933.196061325112!2d0.0411377!3d51.50773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf50750710b3ed8a0!2sYi-Ban!5e0!3m2!1sen!2suk!4v1581024716664!5m2!1sen!2suk"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 'none' }}
        allowFullScreen=""
        title="Google Maps"
      />
    </SectionStyled>
  );
}
