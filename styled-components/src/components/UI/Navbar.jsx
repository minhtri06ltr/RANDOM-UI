import styled from "styled-components";
import { smallPhone } from "../../responsive";
const Container = styled.div`
  height: 6rem;

  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-weight: bold;
  text-decoration: underline crimson;
  font-size: 3.5rem;
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  ${smallPhone({ display: "none" })}
`;
const MenuItem = styled.li`
  font-size: 1.7rem;
  margin-right: 2.5rem;
  cursor: pointer;
  font-weight: 700;
  color: gray;
`;
const Button = styled.button`
  cursor: pointer;
  position: relative;
  padding: 1rem 1.5rem;
  background: transparent;
  outline: none;
  color: white;

  font-weight: bold;
  font-size: 1.7rem;
  border: 0;
  z-index: 1;
  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 50%;
    transform: skewX(30deg);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.75);
    z-index: -1;
    border-radius: 20%;
    border: 2px solid white;
  }
  &::before {
    background-color: transparent;
    top: -0.5rem;
    left: 0rem;
  }
  &::after {
    background-color: navy;
    top: 0.5rem;
    left: 6rem;
  }
  &:hover {
    &::before,
    &::after {
      top: 0;
      transform: skewx(0deg);
    }
    &::after {
      left: 0rem;
    }
    &::before {
      left: 5.75rem;
    }
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>Agency</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Features</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Left>
      <Button>JOIN TODAY</Button>
    </Container>
  );
};

export default Navbar;
