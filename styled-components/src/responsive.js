import { css } from "styled-components";
export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 1023px) {
      ${props}
    }
  `;
};

export const phone = (props) => {
  return css`
    @media only screen and (max-width: 767px) {
      ${props}
    }
  `;
};

export const smallPhone = (props) => {
  return css`
    @media only screen and (max-width: 479px) {
      ${props}
    }
  `;
};
