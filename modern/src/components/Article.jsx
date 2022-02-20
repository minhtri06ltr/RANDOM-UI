import React from "react";
import styled, { css } from "styled-components";
import { ipad } from "../responsive";

const Container = styled.div`
  background-color: var(--color-blog);
  &:first-child {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    ${ipad({ gridRow: "1 / 2" })}
  }
  ${ipad({ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%)" })}
  ${(props) =>
    props.type === "secondary" &&
    css`
      clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
    `};

  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  ${ipad({ flex: "2" })}
`;
const Img = styled.img`
  width: 100%;
  ${ipad({ height: "100%" })}
`;
const Bottom = styled.div`
  padding: 3rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${(props) =>
    props.type === "secondary" &&
    css`
      padding: 1rem;
    `};
  ${ipad({ padding: "3rem 2rem" })}
`;
const Wrapper = styled.div`
  margin-bottom: 3rem;
`;
const Text = styled.span`
  color: white;
  font-weight: 500;

  line-height: 30px;
  cursor: pointer;
  font-size: 14px;
  display: block;

  font-family: var(--font-family);
`;
const Title = styled.span`
  color: white;
  font-size: 26px;
  line-height: 35px;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 800;
  font-family: var(--font-family);
  ${(props) =>
    props.type === "secondary" &&
    css`
      font-size: 20px;
      line-height: 29px;
    `};
  ${ipad({ fontSize: "26px", lineHeight: "35px" })}
`;

const Article = ({ img, type = "secondary" }) => {
  return (
    <Container type={type}>
      <Top>
        <Img src={img} />
      </Top>
      <Bottom type={type}>
        <Wrapper>
          <Text>Sep 26, 2021</Text>
          <Title type={type}>
            GPT-3 and Open AI is the future. Let us explore how it is?
          </Title>
        </Wrapper>
        <Text>Read Full Article</Text>
      </Bottom>
    </Container>
  );
};

export default Article;
