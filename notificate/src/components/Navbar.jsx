import styled from "styled-components";
import { smallPhone } from "../responsive";

const Container = styled.div`
  height: 1vh;
  background-color: lightseagreen;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: white;
  ${smallPhone({ fontSize: "1.7rem" })}

  text-decoration: underline;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: 2rem;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 2rem;
`;
const Username = styled.span`
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
`;
const Navbar = ({ setIsLogin }) => {
  return (
    <Container>
      <Logo>Notificate App</Logo>
      <Menu>
        <MenuItem>
          <i class="fa-solid fa-bell"></i>
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            setIsLogin(false);
          }}
        >
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </MenuItem>
      </Menu>
      <Username>{localStorage.getItem("username")}</Username>
    </Container>
  );
};

export default Navbar;
