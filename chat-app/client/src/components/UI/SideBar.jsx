import React from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";

const Container = styled.div`
  background: #343434;
  border-right: 1px solid #eee;
  height: 100%;
  width: 22%;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.8rem 0;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const LogoWrapper = styled.div`
  cursor: pointer;
`;
const Logo = styled.img``;
const cookies = new Cookies();
const SideBar = () => {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");
    window.location.reload();
  };
  return (
    <Container>
      <LogoContainer>
        <LogoWrapper>
          <Logo
            src="https://img.icons8.com/clouds/60/000000/home.png"
            atl="Home"
          />
        </LogoWrapper>
        <LogoWrapper>
          <Logo
            onClick={logout}
            src="https://img.icons8.com/external-dreamcreateicons-outline-color-dreamcreateicons/50/000000/external-exit-museum-dreamcreateicons-outline-color-dreamcreateicons.png"
            atl="Logout"
          />
        </LogoWrapper>
      </LogoContainer>
    </Container>
  );
};

export default SideBar;
