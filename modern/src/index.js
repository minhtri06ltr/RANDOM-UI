import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
  --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
  --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
  --font-family: 'Manrope', sans-serif;
  --color-bg: #040C18;
  --color-footer : #031B34;
  --color-blog: #042c54;
  --color-text: #81AFDD;
  --color-subtext: #FF8A71;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);