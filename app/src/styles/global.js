import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.variables.colors.grayVeryLight};
    color: var(--common-text);
  }

  html {
    font-size: 62.5%;
  }
  
  @media (max-width: 1080px) {
    html {
        font-size: 56.25%;
    }
  }

  @media (max-width: 720px) {
    html {
        font-size: 50%;
    }
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  ul {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
