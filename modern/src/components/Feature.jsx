import React from "react";
import styled from "styled-components";
import { phone } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) => props.direction};
  flex: 1;
  justify-content: space-between;
  margin-right: 2rem;
  margin-bottom: 6rem;
  ${phone({ flexDirection: "column" })}
`;

const Title = styled.span`
  font-weight: 800;
  font-family: var(--font-family);
  color: white;
  position: relative;
  flex: 3;
  line-height: 30px;
  letter-spacing: -0.04rem;
  font-size: 24px;
  margin-bottom: 3rem;
  &::before {
    position: absolute;
    background: var(--gradient-text);
    top: -20px;
    width: 15%;
    height: 4px;
    left: 0;
    content: "";
  }
`;
const Desc = styled.p`
  color: var(--color-text);
  font-size: 18px;
  flex: 7;
  font-weight: 400;
  font-family: var(--font-family);
  line-height: 30px;
`;
const Feature = ({ title, desc, direction = "column" }) => {
  return (
    <Container direction={direction}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  );
};

export default Feature;
