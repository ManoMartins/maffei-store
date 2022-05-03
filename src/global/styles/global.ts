import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black[500]};
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button: {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`