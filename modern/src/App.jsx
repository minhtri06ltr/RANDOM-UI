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

const Container = styled.div``;
const Background = styled.div`
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
const Text = styled.div`
  //change the text color to gradient
  background-color: var(--gradient-text);
  //located background cover text
  background-clip: text;
  --webkit-background-clip: text;
  //delete default text color
  --webkit-text-fill-color: transparent;
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
