import React from "react";
import styled from "styled-components";
import { customCss, ipad, phone } from "../responsive";
import logo from "../assets/img/logo.svg";

const Container = styled.div`
  background-color: var(--color-footer);
  padding: 0 6rem;
  ${phone({ padding: "0 2rem" })}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 7rem;
  align-items: center;
  justify-content: center;
  ${phone({ padding: "10rem 0" })}
`;
const Title = styled.span`
  ${customCss({ color: "gradient-text" })};
  text-align: center;
  display: block;

  line-height: 71px;
  font-weight: 800;
  font-size: 58px;
  margin-bottom: 4rem;
  font-family: var(--font-family);
`;
const Button = styled.button`
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  padding: 1rem;

  font-weight: 500;

  line-height: 30px;

  font-size: 18px;
`;
const Center = styled.div`
  display: flex;
  margin-top: 2rem;
      justify-content: center;
    align-items: flex-start;
  ${ipad({ flexDirection: "column",alignItems:"center" })}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${ipad({ justifyContent: "space-around", flexWrap: "wrap" })};
  &:last-child{
  ${ipad({ marginRight: "-8rem" })};
  }
  &:first-child {
    flex-direction: column;
    padding-right: 14rem;
    justify-content: flex-start;
    ${ipad({
      marginBottom: "6rem",
      justifyContent: "center",
      paddingRight: "0",
      alignItems: "center",
    })}
  }
`;
const Logo = styled.img`
  margin-bottom: 2rem;
`;
const Text = styled.span`
  color: white;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
`;
const List = styled.ul`
  list-style: none;
  margin-right: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  ${ipad({ marginRight: "8rem", alignItems: "center" })};
`;
const ListItem = styled.li`
  color: white;
  cursor: pointer;
  margin-bottom: 3rem;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  display: block;
  ${ipad({ textAlign: "center" })};
  &:first-child {
    cursor: default;
    font-weight: 800;
    font-size: 16px;
  }
`;
const Bottom = styled.span`
  text-align: center;
  display: block;
  color: white;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 1rem;
  margin-top: 6rem;
`;
const Footer = () => {
  return (
    <Container>
      <Top>
        <Title>Do you want to step in to the future before others</Title>
        <Button>Request Early Access</Button>
      </Top>
      <Center>
        <Wrapper>
          <Logo src={logo} />

          <Text>Crechterwoord K12 182 DK Alknjkcb. All Rights Reserved</Text>
        </Wrapper>
        <Wrapper>
          <List>
            <ListItem>Links</ListItem>
            <ListItem>Overons</ListItem>
            <ListItem>Social Media</ListItem>
            <ListItem>Counters</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <List>
            <ListItem>Company</ListItem>
            <ListItem>Terms & Conditions</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <List>
            <ListItem>Get in touch</ListItem>
            <ListItem>Crechterwoord K12 182 DK Alknjkcb</ListItem>
            <ListItem>085-132567</ListItem>
            <ListItem>info@payment.net</ListItem>
          </List>
        </Wrapper>
      </Center>
      <Bottom>© 2021 GPT-3. All rights resverved</Bottom>
    </Container>
  );
};

export default Footer;
