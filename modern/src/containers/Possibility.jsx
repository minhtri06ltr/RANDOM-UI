import React from "react";
import styled from "styled-components";
import { customCss, pc, phone } from "../responsive";
import possibility from "../assets/img/possibility.png";

const Container = styled.div`
  margin: 6rem;
  padding: 0 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--gradient-bar);
  ${pc({ flexDirection: "column", alignItems: "center" })}
  ${phone({ margin: "6rem 2rem" })}
`;
const Left = styled.div`
  width: 50%;
  display: flex;

  align-items: center;
  justify-content: center;

  ${pc({ width: "100%" })}
`;
const Img = styled.img`
  width: 100%;
`;
const Right = styled.div`
  width: 50%;
  margin: 2rem 0;
  padding-left: 2rem;

  display: flex;
  padding-right: 8.5rem;
  background-color: var(--gradient-bar);
  ${pc({ marginTop: "6rem", padding: 0 })}

  ${pc({ width: "100%" })}
flex-direction:column;
`;
const Text = styled.span`


  color: ${(props) =>
    props.color === "primary" ? "#00c2ff" : "var(--color-subtext)"};
  font-weight: 500;

  line-height: 30px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 2rem;

  font-family: var(--font-family);
`;
const Title = styled.span`
  ${customCss({ color: "gradient-text" })};

  ${pc({ textAlign: "center" })};
  line-height: 45px;
  font-weight: 800;
  font-size: 34px;
  margin: 2rem 0;
  font-family: var(--font-family);
`;
const Desc = styled.p`
  ${pc({ textAlign: "center" })};
  color: var(--color-text);
  font-size: 18px;
  flex: 7;
  margin-bottom: 2rem;
  font-weight: 400;
  font-family: var(--font-family);
  line-height: 30px;
`;
const Wrapper = styled.div`
  ${pc({ textAlign: "center" })};
`;
const Possibility = () => {
  return (
    <Container>
      <Left>
        <Img src={possibility} />
      </Left>
      <Right>
        <Wrapper>
          <Text color="primary">Request Eerly Access to Get Started</Text>
        </Wrapper>
        <Title>The possibilities are beyond your imagination</Title>
        <Desc>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachman. Party we years to order allow
          asked of
        </Desc>
        <Wrapper>
          <Text>Request Eerly Access to Get Started</Text>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Possibility;
