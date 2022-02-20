import React from "react";
import styled, { css } from "styled-components";
import { ipad, smallPhone } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) => props.direction};
  flex: 1;
  justify-content: flex-start;
  margin-right: 3rem;

  margin-bottom: 4rem;
  ${ipad({ flexDirection: "column" })}
  ${smallPhone({ paddingRight: "3rem", marginRight: "0", width: "100%" })}
`;

const Title = styled.span`
  font-weight: 800;
  font-family: var(--font-family);
  color: white;

  position: relative;

  line-height: 30px;
  letter-spacing: -0.04rem;
  font-size: 24px;
  word-break: break-all;

  margin-bottom: 3rem;
  ${(props) =>
    props.direction === "row" &&
    css`
      margin-bottom: 4rem;
      margin-right: 8rem;
    `}
  ${smallPhone({ marginRight: "0", paddingRight: "3rem" })}
  min-width: 215px;

  &::before {
    position: absolute;
    background: var(--gradient-bar);
    top: -20px;
    width: 30px;
    height: 4px;
    left: 0;
    content: "";
  }
`;
const Desc = styled.p`
  color: var(--color-text);
  font-size: 18px;

  font-weight: 400;
  font-family: var(--font-family);
  line-height: 30px;
`;
const Feature = ({ title, desc, direction = "column" }) => {
  return (
    <Container direction={direction}>
      <Title direction={direction}>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  );
};

export default Feature;
