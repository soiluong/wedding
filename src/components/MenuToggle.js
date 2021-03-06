import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

import { media, zIndex } from "styles/vars"

const Button = styled.button`
  display: none;

  ${media.large`
    display: block;
    left: 29.5px;
    top: 31px;
    position: fixed; 
    ${zIndex('menuToggleBars')};
  `};
`;

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, ...props }) => (
  <Button onClick={toggle} {...props}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
      />
    </svg>
  </Button>
);

export default MenuToggle;
