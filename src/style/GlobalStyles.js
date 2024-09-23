import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.colorTxt};
    font-family: 'Arial', sans-serif;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }
`;

export default GlobalStyles;
