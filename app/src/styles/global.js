import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }

  :root {
    // COLORS ====================================================
    --gray-very-light: #e8e8f0;
    --gray-light-500: #d3d3d3;
    --common-text: #393939;

    // Others
    --radius-button: 0.4rem;
  }

  body {
    background: var(--gray-very-light);
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
