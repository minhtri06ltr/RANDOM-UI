import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Price from "./components/Price";
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
const PriceBackground = styled.div`
  ${Shape}
  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
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
      <Container>
        <Price />
        <PriceBackground />
      </Container>
      <Container>
        <Contact />
      </Container>

      <Footer />
    </>
  );
};

export default App;
