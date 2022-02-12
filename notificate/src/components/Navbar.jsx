import { useEffect, useRef, useState } from "react";

import styled, { css } from "styled-components";
import { smallPhone } from "../responsive";

const Container = styled.div`
  height: 2%;
  background-color: lightseagreen;
  padding: 2rem;
  display: flex;

  justify-content: space-between;
  position: fixed;
  width: -webkit-fill-available;
  top: 0;
  align-items: center;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  ${smallPhone({ fontSize: "1.7rem" })}

  text-decoration: underline #dca797;
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
  position: relative;
`;
const Badge = styled.div`
  font-size: 1.3rem;
  width: 1.3rem;
  height: 1.3rem;
  top: -0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -0.7rem;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`;
const Username = styled.span`
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
`;
const Notification = styled.div`
  cursor: default;
  position: absolute;
  right: calc(-25rem / 4);
  background-color: white;
  box-shadow: 1px 5px 45px -12px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 1px 5px 45px -12px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 1px 5px 45px -12px rgba(0, 0, 0, 0.59);
  border-radius: 0.5rem;
  width: 25rem;
  top: 120%;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;
const Message = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;
const MessageItem = styled.li`
  color: black;
  font-size: 1.4rem;
  padding: 1rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid #eee;
    top: 100%;
    display: block;
    width: 80%;
    padding: 0 1rem;
  }
`;
const Button = styled.button`
  display: block;
  margin: 1rem auto;
  width: 50%;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: lightseagreen;
  color: white;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
`;

const Navbar = ({ setIsLogin, socket }) => {
  const outSide = useRef(null);
  const [notifications, setNotifications] = useState([]);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    //get data from socket
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);
  const closeNotificate = (e) => {
    if (outSide.current && open && !outSide.current.contains(e.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", closeNotificate);
  console.log(notifications);
  return (
    <Container>
      <Logo>Notificate App</Logo>
      <Menu>
        <MenuItem
          ref={outSide}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="fa-solid fa-bell"></i>
          {notifications.length !== 0 && <Badge>{notifications.length}</Badge>}
          <Notification
            ref={outSide}
            onClick={(e) => e.stopPropagation()}
            open={open}
          >
            <Message>
              {notifications.map((noti, index) => {
                return (
                  <MessageItem key={index}>
                    {noti.senderName} {noti.type} your post
                  </MessageItem>
                );
              })}
            </Message>
            <Button
              onClick={() => {
                setNotifications([]);
              }}
            >
              Mark as read
            </Button>
          </Notification>
        </MenuItem>
        <MenuItem
          count={notifications.length}
          onClick={() => {
            localStorage.clear();
            setIsLogin(false);
          }}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </MenuItem>
      </Menu>
      <Username>{localStorage.getItem("username")}</Username>
    </Container>
  );
};

export default Navbar;
