import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import styled, { css } from "styled-components";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { customCss, ipad, maximun, phone } from "../responsive";

const Container = styled.div`
  padding: 2rem 6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${phone({ padding: "2rem 4rem" })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoText = styled.a`
  margin-right: 2rem;
`;
const Logo = styled.img`
  width: 62.65px;
  height: 16.02px;
`;
const Link = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  font-family: var(--font-family);
  ${ipad({ display: "none" })}
`;
const LinkItem = styled.a`
  color: var(--color-normal-text);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  line-height: 25px;
  margin: 0 1rem;
  font-family: var(--font-family);
  ${ipad({ display: "block", padding: "1rem 0", textAlign: "center" })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const WrapperButton = styled.div`
  ${phone({ display: "none" })}
  display: flex;
`;
const Button = styled.button`
  font-weight: 500;
  font-size: 18px;
  font-family: var(--font-family);
  line-height: 25px;
  color: var(--color-normal-text);
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;

  &:first-child {
    margin-right: 1.5rem;
    ${phone({ marginRight: "0" })}
  }
  ${(props) =>
    props.variant === "primary" &&
    css`
      padding: 1rem 2.5rem;
      color: var(--color-lightner-text);
      border-radius: 5px;
      background-color: #ff4b20;
    `}
  ${phone({ padding: "1rem 1.5rem" })}
`;
const Menu = styled.div`
  ${maximun({ visibility: "hidden", opacity: "0" })}
  ${ipad({
    visibility: "visible",
    opacity: "1",
    marginLeft: "3rem",
    position: "relative",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  top: 166%;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  width: 200px;
  left: -278%;
  flex-direction: column;
  padding: 1rem 0;
  position: absolute;
  background-color: var(--color-footer);
  ${customCss({ animation: "scale-up-ver-top" })}
`;
const Animation = styled.div`
  ${customCss({ animation: "rotate-90" })}
`;
const WrapperMenuButton = styled.div`
  ${maximun({ display: "none" })}
  ${phone({
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  })}
`;
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Left>
        <LogoText href="#home">
          <Logo src={logo} />
        </LogoText>
        <Link>
          <LinkItem href="#home">Home</LinkItem>
          <LinkItem href="#gpt3">What is GPT?</LinkItem>
          <LinkItem href="#possibility">Open AI</LinkItem>
          <LinkItem href="#features">Case Studies</LinkItem>
          <LinkItem href="#blog">Library</LinkItem>
        </Link>
      </Left>
      <Right>
        <WrapperButton>
          <Button>Sign in</Button>
          <Button variant="primary">Sign up</Button>
        </WrapperButton>
        <Menu>
          {toggle ? (
            <>
              <Animation>
                <RiCloseLine
                  style={{ cursor: "pointer" }}
                  color="#fff"
                  size={40}
                  onClick={() => setToggle(false)}
                />
              </Animation>
              <Wrapper>
                <LinkItem href="#home">Home</LinkItem>
                <LinkItem href="#gpt3">What is GPT?</LinkItem>
                <LinkItem href="#possibility">Open AI</LinkItem>
                <LinkItem href="#features">Case Studies</LinkItem>
                <LinkItem href="#blog">Library</LinkItem>
                <WrapperMenuButton>
                  <Button>Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </WrapperMenuButton>
              </Wrapper>
            </>
          ) : (
            <RiMenu3Line
              style={{ cursor: "pointer" }}
              color="#fff"
              size={40}
              onClick={() => setToggle(true)}
            />
          )}
        </Menu>
      </Right>
    </Container>
  );
};

export default Navbar;
