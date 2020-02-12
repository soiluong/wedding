import { css } from 'styled-components';

const breakpoints = {
  small: '479px',
  medium: '767px',
  large: '1024px'
};

export const media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;

    return acc;
  },
  {}
);

export const zStack = [
  'navBackground',
  'menuToggleBars',
  'navList',
  'override' // this should always be last
];

export const getZStackIndex = layer => zStack.indexOf(layer) + 1;

export const zIndex = layer => `z-index: ${getZStackIndex(layer)}`;