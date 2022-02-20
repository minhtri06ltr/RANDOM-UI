import React from "react";
import styled from "styled-components";
import { phone } from "../responsive";

const Container = styled.div`
  background: var(--gradient-bar);
  margin: 10rem 6rem;
  padding: 4rem 3rem;

  display: flex;

  border-radius: 10px;
  align-items: center;

  ${phone({ margin: "4rem 2rem", padding: "4rem 2rem",flexDirection:"column" })};
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${phone({ width:"100%",textAlign:"center",marginBottom:"2rem" })};
`;
const Text = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 500;

  font-family: var(--font-family);
`;
const Title = styled.span`
  color: black;
  font-size: 24px;
  line-height: 60px;

  font-weight: 800;
  font-family: var(--font-family);
`;
const Right = styled.div`
  width: 50%;
  text-align: right;
`;
const Button = styled.button`
  border: 0;
  outline: none;

  font-family: var(--font-family);
  background-color: black;
  border-radius: 50px;
  color: white;
  font-size: 20px;

  padding: 1rem 3rem;
  line-height: 27px;
  font-weight: 600;
  cursor: pointer;
`;
const Action = () => {
  return (
    <Container>
      <Left>
        <Text>Request Early Access to Get Started</Text>
        <Title>
          Register today & start exploring the endless possibilities.
        </Title>
      </Left>
      <Right>
        <Button>Get Started</Button>
      </Right>
    </Container>
  );
};

export default Action;
