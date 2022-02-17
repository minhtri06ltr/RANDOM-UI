import { css } from "styled-components";

export const maximun = (props) => {
  return css`
    @media only screen and (max-width: 9999px) {
      ${props}
    }
  `;
};

export const pc = (props) => {
  return css`
    @media only screen and (max-width: 1365px) {
      ${props}
    }
  `;
};

export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 1113px) {
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

export const customCss = (props) => {
  if (props.color === "gradient-text") {
    return css`
      //change the text color to gradient
      background: var(--gradient-text);
      //located background cover text
      background-clip: text;
      -webkit-background-clip: text;
      //delete default text color
      -webkit-text-fill-color: transparent;
    `;
  }
  if (props.bg === "gradient-bg") {
    return css`
      /* ff 3.6+ */
      background: -moz-radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
      );

      /* safari 5.1+,chrome 10+ */
      background: -webkit-radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
      );

      /* opera 11.10+ */
      background: -o-radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
      );

      /* ie 10+ */
      background: -ms-radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
      );

      /* global 92%+ browsers support */
      background: radial-gradient(
        circle at 3% 25%,
        rgba(0, 40, 83, 1) 0%,
        rgba(4, 12, 24, 1) 100%
      );
    `;
  }
  if (props.animation === "scale-up-ver-top") {
    return css`
      -webkit-animation: scale-up-ver-top 0.4s
        cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      @-webkit-keyframes scale-up-ver-top {
        0% {
          -webkit-transform: scaleY(0.4);
          transform: scaleY(0.4);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
        }
        100% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
        }
      }
      @keyframes scale-up-ver-top {
        0% {
          -webkit-transform: scaleY(0.4);
          transform: scaleY(0.4);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
        }
        100% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
        }
      }
    `;
  }
  if (props.animation === "rotate-90") {
    return css`
      -webkit-animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @-webkit-keyframes rotate-90-cw {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
        }
      }
      @keyframes rotate-90-cw {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
        }
      }
    `;
  }
};
