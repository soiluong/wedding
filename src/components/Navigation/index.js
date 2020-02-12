import React, { useState, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { motion, useCycle } from 'framer-motion';

import MenuToggle from 'components/MenuToggle';
import useViewport from 'components/customHooks/useViewport';
import {
  DRESS_CODE,
  EVENTS,
  GETTING_THERE,
  MENU,
  NEARBY_ATTRACTIONS,
  NEARBY_HOTELS,
  PHOTO_GALLERY,
  PREAMBLE,
  TEA_CEREMONY
} from 'constants/identifiers';

import { media, zIndex } from 'styles/vars';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Background = styled(motion.div)`
  display: none;

  ${media.large`
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: var(--color-true-white);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.38);
    position: fixed;
    ${zIndex('navBackground')};
  `};
`;

const Nav = styled(motion.nav)`
  background-color: var(--color-true-white);
  left: 50%;
  margin-left: -486px;
  position: fixed;
  top: 0;
  z-index: 999;

  ${media.large`
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 0;
    height: 100vh;
    width: 100%;
  `};
`;

const List = styled(motion.ul)`
  display: flex;

  ${media.large`
    flex-direction: column;
    left: 0;
    margin-left: 20px;
    margin-top: 60px;
    position: fixed;
    ${zIndex('navList')};
  `};
`;

const ListItem = styled(motion.li)`
  &:first-of-type {
    padding-left: 5px;
  }

  &:last-of-type {
    padding-right: 5px;
  }

  ${media.large`
    &&& {
      padding-left: 0;
    }
  `};
`;

const Link = styled.a`
  color: var(--color-dark-grey);
  display: block;
  font-size: 0.8rem;
  padding: 20px 10px;
  text-decoration: none;

  &:hover {
    background: var(--color-orange);
    color: var(--color-white);
    text-decoration: none;
  }

  ${media.large`
    padding: 15px 10px;
  `};
`;

const navList = [
  {
    href: PREAMBLE,
    text: 'Wedding'
  },
  {
    href: EVENTS,
    text: 'Itinerary'
  },
  {
    href: MENU,
    text: 'Menu'
  },
  {
    href: TEA_CEREMONY,
    text: 'Tea Ceremony'
  },
  {
    href: NEARBY_ATTRACTIONS,
    text: 'Nearby Attractions'
  },
  {
    href: GETTING_THERE,
    text: 'Getting There'
  },
  {
    href: NEARBY_HOTELS,
    text: 'Nearby Hotels'
  },
  {
    href: DRESS_CODE,
    text: 'Dress Code'
  },
  {
    href: PHOTO_GALLERY,
    text: 'Photo Gallery'
  }
];

function scrollTo(href, toggleOpen) {
  return function onClickHandler(event) {
    event.preventDefault();
    toggleOpen();

    const element = document.querySelector(`#${href}`);
    window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' });
  };
}

export default function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const { viewportWidth } = useViewport();

  useLayoutEffect(() => {
    setDimensions({
      height: containerRef.current.offsetHeight,
      width: containerRef.current.offsetWidth
    });
  }, []);

  const isLargerThanLarge = viewportWidth > 1023;

  return (
    <Nav
      initial={isLargerThanLarge ? 'open' : false}
      animate={isLargerThanLarge ? 'open' : isOpen ? 'open' : 'closed'}
      ref={containerRef}
      custom={dimensions.height}
    >
      <Background variants={sidebar} />
      <List
        variants={listVariants}
        isOpen={isOpen}
      >
        {navList.map(({ href, text }) => (
          <ListItem key={href} variants={listItemVariants}>
            <Link href={`#${href}`} onClick={scrollTo(href, toggleOpen)}>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <MenuToggle toggle={toggleOpen} />
    </Nav>
  );
}
