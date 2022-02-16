import Navbar from "./components/Navbar";
import styled from "styled-components";
import Header from "./containers/Header";
import GPT3 from "./containers/GPT3";
import Brand from "./components/Brand";
import Action from "./components/Action";
import Features from "./containers/Features";
import Blog from "./containers/Blog";
import Footer from "./containers/Footer";
import Possibility from "./containers/Possibility";
import { customCss } from "./responsive";

const Container = styled.div``;
const Background = styled.div`
  ${customCss({ bg: "gradient-bg" })}
`;
const Text = styled.div`
  ${customCss({ color: "gradient-text" })}
`;
const App = () => {
  return (
    <Container>
      <Background>
        <Navbar />
        <Header />
      </Background>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <Action />
      <Blog />
      <Footer />
    </Container>
  );
};

export default App;
