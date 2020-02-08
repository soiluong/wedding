import React from 'react';
import styled from 'styled-components';

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

const Nav = styled.nav`
  background-color: var(--color-true-white);
  left: 50%;
  margin-left: -490px;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:first-of-type {
    padding-left: 5px;
  }

  &:last-of-type {
    padding-right: 5px;
  }
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

function scrollTo(href) {
  return function onClickHandler(event) {
    event.preventDefault();

    document.querySelector(`#${href}`).scrollIntoView({
      behavior: 'smooth'
    });
  };
}

export default function Navigation() {
  return (
    <Nav>
      <List>
        {navList.map(({ href, text }) => (
          <ListItem key={href}>
            <Link href={`#${href}`} onClick={scrollTo(href)}>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
}
