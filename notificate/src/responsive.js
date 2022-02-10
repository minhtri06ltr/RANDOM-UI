import { css } from "styled-components";

export const smallPhone = (props) => {
    return css`
      @media only screen and (max-width: 479px) {
        ${props}
      }
    `;
  };