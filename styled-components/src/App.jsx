import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Service from "./components/Service";
import Navbar from "./components/UI/Navbar";

const Container = styled.div`
  max-width: 1448px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
//reuse background shape
const Shape = css`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const IntroBackground = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%,64% 0%,54% 100%,100% 100%);
  background-color: crimson;
`;
const FeatureBackground = styled.div`
  ${Shape}
  clip-path: polygon(54% 0,30% 100%,0% 100%,0% 0%);
  background-color: pink;
`;
const ServiceBackground = styled.div`
  ${Shape}
  clip-path: polygon(30% 0%, 30% 100%, 0% 100%, 0% 0%);
  background-color: #f88497;
`;
const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroBackground />
      </Container>
      <Container>
        <Feature />
        <FeatureBackground />
      </Container>
      <Container>
        <Service />
        <ServiceBackground />
      </Container>
    </>
  );
};

export default App;
