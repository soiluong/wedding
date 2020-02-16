import { css } from 'styled-components';

const breakpoints: { [k: string]: string } = {
  small: '479px',
  medium: '767px',
  large: '1024px'
};

export const media: { small: Function; medium: Function } = Object.keys(
  breakpoints
).reduce((acc, label) => {
  acc[label] = (...args): string => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const zStack = [
  'navBackground',
  'menuToggleBars',
  'navList',
  'override' // this should always be last
];

export const getZStackIndex = (layer: string): number =>
  zStack.indexOf(layer) + 1;

export const zIndex = (layer: string): string =>
  `z-index: ${getZStackIndex(layer)}`;

export const spacer = (number: number, ...args: number[]): string => {
  let value = `${number * 5}px`;

  if (args && args[0] !== undefined) {
    value = `${value} ${spacer(...args)}`;
  }

  return value;
};
