import styled from "styled-components";

const Polygon = styled.div`
  height: 10rem;
  width: 10rem;
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -10rem; // - height
  left: -10rem;
  z-index: -1;
  animation: polygonFloating 25s linear alternate infinite;
  @keyframes polygonFloating {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Start = styled.div`
  height: 12rem;
  width: 12rem;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background-color: #ff97af;

  position: absolute;
  top: 20rem; // - height
  left: -10rem;
  z-index: -1;
  animation: startFloating 25s linear alternate infinite;
  @keyframes startFloating {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Square = styled.div`
  height: 5rem;
  width: 5rem;
  clip-path: polygon(
    0% 15%,
    15% 15%,
    15% 0%,
    85% 0%,
    85% 15%,
    100% 15%,
    100% 85%,
    85% 85%,
    85% 100%,
    15% 100%,
    15% 85%,
    0% 85%
  );
  background-color: #669966;

  position: absolute;
  top: 40rem; // - height
  left: -5rem;
  z-index: -1;
  animation: squareFloating 25s linear alternate infinite;
  @keyframes squareFloating {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;
const AnimatedBackground = () => {
  return (
    <>
      <Polygon />
      <Start />
      <Square />
    </>
  );
};

export default AnimatedBackground;
