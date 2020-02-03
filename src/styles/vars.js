import { css } from 'styled-components';

const breakpoints = {
  small: '479px',
  medium: '767px'
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