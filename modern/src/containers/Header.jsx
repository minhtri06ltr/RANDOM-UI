import React from "react";
import styled from "styled-components";
import { customCss, phone, ipad } from "../responsive";
import ai from "../assets/img/ai.png";
import people from "../assets/img/people.png";

const Container = styled.div`
  padding: 0 0 4rem 6rem;
  ${phone({ padding: "0 2rem 2rem 2rem" })}
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${ipad({ flexDirection: "column" })}
`;
const Left = styled.div`
  margin-top: 6rem;
  flex: 5;
  ${ipad({ paddingRight: "6rem" })}
  ${phone({ marginTop: "2rem", padding: "0" })}
`;
const Title = styled.h1`
  ${customCss({ color: "gradient-text" })}
  font-size: 62px;
  letter-spacing: -0.04rem;
  line-height: 75px;
  font-family: var(--font-family);
  font-weight: 800;
  ${ipad({ textAlign: "center" })}
`;
const Desc = styled.p`
  color: var(--color-text);
  font-family: var(--font-family);
  font-size: 20px;
  line-height: 27px;
  margin: 1.5rem 0;
  ${ipad({ textAlign: "center" })}
`;
const WrapperSocial = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  ${ipad({ justifyContent: "center", margin: "2rem 0" })}
  ${phone({ flexDirection: "column" })}
`;
const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${phone({ flexDirection: "column" })}
`;
const Input = styled.input`
  min-height: 84px; // + 4px top and bottom border
  padding: 0rem 2rem;
  width: 100%;
  flex: 8;
  font-size: 20px;
  line-height: 27px;
  border: 2px solid var(--color-footer);
  font-family: var(--font-family);
  outline: none;
  color: #2f5579;
  background-color: var(--color-blog);
  ${phone({ marginBottom: "1rem", minHeight: "70px", alignCenter: "center" })}
`;
const Button = styled.button`
  min-height: 80px;
  font-size: 20px;
  line-height: 27px;
  color: white;
  cursor: pointer;
  flex: 2;
  font-family: var(--font-family);
  font-weight: bold;
  border: 0;
  outline: none;
  background-color: #ff4b20;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0 2rem;
  ${phone({ borderRadius: "5px", minHeight: "64px" })}
`;
const People = styled.img`
  width: 181.79px;
  height: 38px;
`;
const Text = styled.span`
  color: var(--color-normal-text);
  font-family: var(--font-family);
  font-size: 12px;
  line-height: 38px;
  margin-left: 0.8rem;
  font-weight: 500;
  ${phone({
    marginTop: "1rem",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
  })}
`;
const Right = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  ${ipad({ paddingRight: "6rem" })}
  ${phone({ padding: "0" })}
`;
const Img = styled.img`
  width: 100%;
  ${ipad({ width: "80%" })}
  ${phone({ width: "100%" })}
`;
const Header = () => {
  return (
    <Container id="home">
      <Left>
        <Title>Let's Build Something amazing with GPT-3 OpenAI</Title>
        <Desc>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachman. Party we years to order allow
          asked of
        </Desc>

        <WrapperInput>
          <Input type="email" placeholder="Your Email Address" />
          <Button type="button">Get Started</Button>
        </WrapperInput>
        <WrapperSocial>
          <People src={people} />
          <Text>1600 people requested access a visit in last 24 hours</Text>
        </WrapperSocial>
      </Left>
      <Right>
        <Img src={ai} />
      </Right>
    </Container>
  );
};

export default Header;
