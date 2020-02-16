import { createGlobalStyle } from 'styled-components';

import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  :root {
    --color-true-white: #ffffff;
    --color-white: #fdf6f2;
    --color-blue: #c0d8e3;
    --color-brown: #a78d8a;
    --color-coral: #e18a7a;
    --color-pink: #eeb9a2;
    --color-black: #1d1e20;
    --color-green: #7ed97c;
    --color-apple: #b0e098;
    --color-yellow: #f8f89d;
    --color-orange: #fcb954;
    --color-magenta: #964850;
    --color-beaver: #a48568;
    --color-title: #333333;
    --color-gray: #9b9b9b;
    --color-dark-grey: #545454;
    --color-border: #dcdcdc;
    
    --font-title: 'Lobster', cursive;
    --font-body: 'Lato', sans-serif;
    
    --font-small: 0.9rem;
    --font-medium: 1rem;
    --font-large: 1.1rem;
  }
  
  body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  main {
    padding-bottom: 10px;
  }
  
  h1, h2, h3 {
    font-family: var(--font-title);
    font-weight: normal;
    margin-top: 0;
  }
  
  h1 {
    color: var(--color-white);
    font-size: 84px;
    margin-bottom: 30px;
    text-shadow: 0 6px 10px rgba(0,0,0,.38);
  }
  
  h2 {
    color: var(--color-title);
    font-size: 45px;
  }
  
  address {
    font-style: normal;
  }
  
  p, address, span {
    line-height: 1.618;
  }
  
  p {
    font-size: 1rem;
    margin-top: 0;
  }
  
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
  
  a {
    color: var(--color-magenta);
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  input, button {
    -webkit-appearance: none;
    border-radius: 0;
  }
  
  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
      background: none;
      border: 0;
      border-radius: 0;
      color: inherit;
      cursor: default;
      font: inherit;
      line-height: normal;
      overflow: visible;
      padding: 0;
      -webkit-appearance: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
  }
  input::-moz-focus-inner,
  button::-moz-focus-inner {
      border: 0;
      padding: 0;
  }
  
  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: none;
  }
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
`;
