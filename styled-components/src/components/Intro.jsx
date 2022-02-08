import styled from "styled-components";
import woman from "../assets/img/woman.png";
import { smallPhone } from "../responsive";
import AnimatedBackground from "./AnimatedBackground";
const Container = styled.div`
  height: calc(100vh - 6rem); // - navbar height
  display: flex;
  padding: 0rem 2rem;
  ${smallPhone({ flexDirection: "column" })}
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${smallPhone({ width: "100%", height: "100%" })}
`;
const Title = styled.h1`
  font-size: 6rem;
  width: 60%;
  ${smallPhone({ width: "100%", fontSize: "5rem" })}
`;
const Desc = styled.p`
  font-size: 2rem;
  width: 60%;
  margin-top: 2rem;
  ${smallPhone({ width: "100%" })}
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
  align-items: center;
  ${smallPhone({ width: "100%", flexDirection: "column" })}
`;
const Contact = styled.div`
  display: flex;

  flex-direction: column;
  ${smallPhone({ alignItems: "center" })}
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
  font-size: 2rem;
`;
const ContactText = styled.span`
  margin-top: 0.5rem;
  color: gray;
  font-size: 2rem;
`;
const Button = styled.button`
  padding: 1rem;
  margin-right: 4rem;
  background-color: darkblue;
  color: white;
  border-radius: 1rem;
  font-weight: bold;
  border: none;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
  ${smallPhone({ marginBottom: "2rem", marginRight: "0rem" })}
`;
const Right = styled.div`
  width: 40%;
  ${smallPhone({ display: "none" })}
`;
const Img = styled.img`
  width: 100%;
  z-index: -1;

  margin-left: 5rem;
`;
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>+84 3679 0 7374</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Img src={woman} />
      </Right>
      <AnimatedBackground />
    </Container>
  );
};

export default Intro;
