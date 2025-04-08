import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff5f2;
    color: #333;
  }
`;

export const cores = {
  vermelho: "#E66767",
  pele: "#FFEBD9",
  branco: "#FFFFFF",
  amarelo: "#FFB930",
};

export default GlobalStyle;
