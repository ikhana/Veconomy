// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
