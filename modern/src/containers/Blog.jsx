import React from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { customCss, ipad, phone } from "../responsive";
import blog01 from "../assets/img/blog01.png";
import blog02 from "../assets/img/blog02.png";
import blog03 from "../assets/img/blog03.png";
import blog04 from "../assets/img/blog04.png";
import blog05 from "../assets/img/blog05.png";

const Container = styled.div`
  margin: 0 6rem;
  ${phone({ margin: "0 2rem" })}
`;
const Title = styled.span`
  ${customCss({ color: "gradient-text" })};

  display: block;

  line-height: 71px;
  font-weight: 800;
  font-size: 58px;
  ${ipad({ textAlign: "center" })}

  font-family: var(--font-family);
`;
const Wrapper = styled.div`
  margin: 8rem 0;
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.8fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  ${ipad({ gridTemplateColumns: "1fr 1fr" })}
  ${phone({ gridTemplateColumns: "1fr" })}
`;

const Blog = () => {
  return (
    <Container>
      <Title>A lot is happening,</Title>
      <Title>We are blogging about it</Title>
      <Wrapper>
        <Article img={blog01} type="primary" />
        <Article img={blog02} />
        <Article img={blog03} />
        <Article img={blog04} />
        <Article img={blog05} />
      </Wrapper>
    </Container>
  );
};

export default Blog;
