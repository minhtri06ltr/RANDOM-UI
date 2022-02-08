import styled from "styled-components";
import app from "../assets/img/app.png";
import { smallPhone } from "../responsive";
import AnimatedBackground from "./AnimatedBackground";
const Container = styled.div`
  display: flex;
  ${smallPhone({ flexDirection: "column", padding: "3rem 2rem" })}
`;
const Left = styled.div`
  width: 50%;
  ${smallPhone({ display: "none" })}
`;
const Img = styled.img`
  transform: scale(1.7);
  margin-top: 23rem;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12rem;
  z-index: 1;
  ${smallPhone({ width: "100%" })}
`;
const Title = styled.span`
  font-size: 7rem;
  ${smallPhone({ fontSize: "5rem" })}
`;
const SubTitle = styled.span`
  font-size: 2.4rem;
  font-style: italic;
  margin-top: 3rem;
  color: #333;
`;
const Desc = styled.p`
  margin-top: 3rem;
`;
const Button = styled.button`
  border: none;
  padding: 1.5rem 2rem;
  background-color: darkblue;
  color: white;
  font-size: 2rem;
  width: 15rem;
  margin-top: 2rem;
  cursor: pointer;
  border-radius: 2rem;
`;
const Feature = () => {
  return (
    <Container>
      <Left>
        <Img src={app} />
      </Left>
      <Right>
        <Title>
          <b>good </b>design
          <br />
          <b> good </b>business
        </Title>
        <SubTitle>We know that good desgin means good business</SubTitle>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          excepturi commodi quos repudiandae dicta rerum deserunt incidunt in,
          perferendis vel officia veritatis ratione. Assumenda, unde ipsam hic
          fugit minus labore!
        </Desc>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          fugiat.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedBackground />
    </Container>
  );
};

export default Feature;
