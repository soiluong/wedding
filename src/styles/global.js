import { createGlobalStyle } from "styled-components"

import { reset } from "./reset"

export const GlobalStyle = createGlobalStyle`
  ${reset};
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  :root {
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
  }
  
  body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  main {
    padding-bottom: 10px;
  }
  
  h1, h2, h3 {
    font-family: 'Lobster', cursive;
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
    color: var(--color-brown);
    font-size: 45px;
    text-shadow: var(--color-blue) -2px 2px;
  }
  
  address {
    font-style: normal;
  }
  
  p, address {
    font-size: 20px;
  }
  
  p {
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
`